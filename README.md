# Walisonu app

This project was originally deployed to AWS

## Technologies

- React app in NodeJS
- Webpack
- AWS EC2
- Gitlab-Runner
- NGINX

## AWS Installation guide

**Need to have AWS EC2 instance (We use: t2.micro (free tier eligible))**
Open AWS EC2 instance in terminal and follow the steps

**Setup Gitlab-Runner**
1. Download Gitlab-Runner binaries for your system:
>sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

2. Give it permissions to execute:
> sudo chmod +x /usr/local/bin/gitlab-runner

3. Create a GitLab CI user:
>sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

4. Install and run as service:
>sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
sudo gitlab-runner start

**Registering Runners**

1. Run the following command:
>sudo gitlab-runner register

2. Enter your GitLab instance URL:
>https://gitlab.cs.ttu.ee/

3. Enter the token you obtained to register the Runner:
>P3urYm2XY76i8uaeBSpo

4.Enter a description for the Runner, you can change this later in GitLab’s UI:
>1127

5.Enter the tags associated with the Runner, you can change this later in GitLab’s UI:
>words

6.Enter the Runner executor:
>shell

7. Install NodeJS ("sudo" if needed)
>apt install node
apt install npm
apt update


Configure gitlab
- 1. Create .gitlab-ci.yml in project root
- 2. Push it to gitlab

 **Install NGINX ("sudo" if needed)**

Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.

Also best for serving static files.

>apt install nginx
apt update

>service nginx start - Starts the NGINX

>service nginx stop   - Executes the NGINX

> nginx -t              - Tests the configuration (If nginx running and changes are made)

Important file:

	/etc/nginx/conf.d/default.conf

### **OPTIONAL. Setup HTTPS/SSL for Nginx**

1. **Firewall**
>ufw stat                 - firewall statuses

>ufw enable

>ufw allow https

>ufw allow http

>ufw allow ssh

2. **Certbot** (Stop Nginx if it's running)

>apt install certbot

>certbot certonly --standalone -d walisonu.ga     

>cp -r /etc/letsencrypt/ /home/ubuntu/

>cd /home/ubuntu/

>tar czf letsencrypt.tar.gz letsencrypt/

>certbot renew --dry-run 

4. Create config backup 
>cp default.conf default.conf.bck   - copy your configuration for backup

REPLACE YOUR NGINX CONFIG WITH OUR CONFIG

### **Congrats you're done!**
