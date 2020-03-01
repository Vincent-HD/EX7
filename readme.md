# Exercice 7


## Application Web en python fonctionnant sous docker avec reverse proxy

Reverse proxy, Traefik ou Nginx

### Prérequis

Avoir Docker d'installer

### Installing


Pour Traefik:

```
git clone https://github.com/Vincent-HD/SEVEN.git
docker-compose -f docker-composeTraefik.yml up -d
```
Liens des apps: http://api.localhost et http://front.localhost

Pour Nginx

```
git clone https://github.com/Vincent-HD/SEVEN.git
docker-compose up -d
```
Liens des apps: http://localhost/api et http://localhost/front
