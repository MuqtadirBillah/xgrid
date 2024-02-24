To Make the server highly available one can break down this monolathic architecture in microservice Architecture.


Microservice Architecture:

1. To break it into microservice architecture, we should break down into different atomic services having only core tasks for it.
2. Things can be simiplify one step more if we break it down into multiple layers.
Example:
 i. A gateway, responsible for incoming and outgoing request without exposing other layers services.
 ii. API layer, containing all the APIs service for each specific task.
 iii. Service Layer, having multiple logical core services directly interacting with Database Layer.
 iv. Database layer, having database pool and servicing the incoming data request from services requesting data based on conditions.
 v. Use message brokes for things that might take time and can disturb the performance of server and can be done on mean time.
3. To make it independent and highly scalable with minimum latency, we can containerized each service of every layer for example through docker. Once all services are containerized we can deploy those using Kubernetes.
4. Kubernetes Deployment:
    i. Make Pods for each container with appropiate configuration and side car containers with volumes with proper yaml config file.
    ii. Connect each node with each other and establish their communication channel.
    iii. Make it so that if there is increase in load pods can be created according to the need and can be destroyed if causing a problem.
5. CI/CD Pipiline:
    i. Design a automated system for smooth deployment based on changes of any services independently without disturbing others.
5. Host on Cloud Platform:
    i. Deploy it on a Cloud platform like AWS, azure, etc
    ii. Make use of their feature like region selection, cloud scalibility, elastic IPs, serverless functions etc to increase the performance of your server.
6. Network creation.
    i. If required use reverse proxy with combination of services like Nginx to secure your services and direct traffic based on the rules.


Summary:
Divide the backend in 3 main layers namely API, service, database and a gateway service entertaining the incoming and outgoing request and deply it on your cloud platform with proper configurations.