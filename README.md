# Server uptime monitor
Node.js server uptime monitor with data viewing via REST API

## Usage
There are some ways to start the monitor:
1. Via node.js process manager, like pm2 and config file ecosystem.config.js
2. Via systemd service manager, like systemctl
3. Via docker container with command `docker run --name your_container_name -p your_port:61251 iceslam/server-uptime-rest`