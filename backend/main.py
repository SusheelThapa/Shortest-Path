from fastapi import FastAPI

app = FastAPI()


@app.post("/shorttest-path")
async def root():
    return {"success": "true"}
