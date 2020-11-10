project = "waypoint-portfolio-test"

app "waypoint-portfolio-test" {
    labels = {
        "service" = "waypoint-portfolio-test",
        "env" = "dev"
    }
    build {
        use "pack" {}
    }
    deploy {
        use "docker" {}
    }
}