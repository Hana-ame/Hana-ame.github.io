# godotenv

[godotenv](https://github.com/joho/godotenv)

## install
```sh
go get github.com/joho/godotenv
```
## usage
```go
  err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }

  s3Bucket := os.Getenv("S3_BUCKET")
  secretKey := os.Getenv("SECRET_KEY")


godotenv.Load("somerandomfile")
godotenv.Load("filenumberone.env", "filenumbertwo.env")

```

alternative:

[env](https://pkg.go.dev/github.com/gofor-little/env)

