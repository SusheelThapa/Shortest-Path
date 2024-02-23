import numpy as np
from obstacles import Point
DIM = 11  # Dimension of the path


def particle_swarm_optimization(
    max_iterations, swarm_size, max_vel, step_size, inertia, c1, c2, circles, start, end
):

    global START, END
    START = start
    END = end
    particles_loc = np.random.rand(swarm_size, DIM, 2) * 20
    particles_vel = np.random.rand(swarm_size, DIM, 2)

    particles_lowest_loss = [
        loss_function(particles_loc[i, :, :]) for i in range(0, len(particles_loc))
    ]
    particles_best_location = np.copy(particles_loc)

    global_lowest_loss = np.min(particles_lowest_loss)
    global_best_location = particles_loc[np.argmin(
        particles_lowest_loss)].copy()

    best_location = []
    print_iteration = 1
    for iteration_i in range(max_iterations):
        if iteration_i % 20 == 0:
            print("%i%%" % int(iteration_i / max_iterations * 100))
            print_iteration += 1
        for particle_i in range(swarm_size):
            dim_i = 0
            while dim_i < DIM:
                error_particle_best = (
                    particles_best_location[particle_i, dim_i]
                    - particles_loc[particle_i, dim_i]
                )
                error_global_best = (
                    global_best_location[dim_i] -
                    particles_loc[particle_i, dim_i]
                )
                new_vel = (
                    inertia
                    * min(1, (dim_i ** (0.5)) / 4)
                    * particles_vel[particle_i, dim_i]
                    + c1 * np.random.rand(1) * error_particle_best
                    + c2 * np.random.rand(1) * error_global_best
                )

                if new_vel[0] < -max_vel:
                    new_vel[0] = -max_vel
                elif new_vel[0] > max_vel:
                    new_vel[0] = max_vel
                if new_vel[1] < -max_vel:
                    new_vel[1] = -max_vel
                elif new_vel[1] > max_vel:
                    new_vel[1] = max_vel

                particles_loc[particle_i, dim_i] = (
                    particles_loc[particle_i, dim_i] + new_vel[:] * step_size
                )
                particles_vel[particle_i, dim_i] = new_vel[:]

                particle_help = is_valid(
                    circles, particles_loc[particle_i, dim_i, :])
                particles_loc[particle_i, dim_i, 0] += particle_help.x
                particles_loc[particle_i, dim_i, 1] += particle_help.y
                if abs(particle_help.x) > 0.1 or abs(particle_help.y) > 0.1:
                    dim_i -= 1
                dim_i += 1

            particle_error = loss_function(particles_loc[particle_i, :])
            if particle_error < particles_lowest_loss[particle_i]:
                particles_lowest_loss[particle_i] = particle_error
                particles_best_location[particle_i, :] = particles_loc[
                    particle_i, :
                ].copy()
            if particle_error < global_lowest_loss:
                global_lowest_loss = particle_error
                global_best_location = particles_loc[particle_i, :].copy()

        best_location = global_best_location.copy()
    return best_location


def loss_function(x):
    z = (x[0, 0] - START.x) ** 2 + (x[0, 1] - START.y) ** 2
    for i in range(DIM - 1):
        z = z + ((x[i, 0] - x[i + 1, 0]) ** 2 + (x[i, 1] - x[i + 1, 1]) ** 2)
    z = z + (x[DIM - 1, 0] - END.x) ** 2 + (x[DIM - 1, 1] - END.y) ** 2
    return np.sqrt(z)


def is_valid(circles, p):
    to_add = Point(0, 0)
    point_p = Point(p[0], p[1])
    for i in range(len(circles)):
        if circles[i].inside_circle(point_p):
            to_add = Point(
                circles[i].how_to_exit_x(point_p.x) + to_add.x,
                circles[i].how_to_exit_y(point_p.y) + to_add.y,
            )
    return to_add
