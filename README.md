# ThatsAShort.link <img src="https://jnsaph.website/assets/icons/TASL.svg" width="40px">
A simpler URL Shortener that actually works. 

## Installation
```
git clone http://github.com/JNSAPH/ThatsAShort.link
```
```
npm install
```
```
npm start
```
```
http://localhost:3010/
```


## Usage 
Download the Repo and follow the Steps under **Installation** and Change the Default Username an Password in [config.json](/config.json).
Configure your Webserver as a Reverse Proxy if needed.

Make sure you have MongoDB installed on your System! This is currently crucial for making it work.

<img src="https://cdn.jnsaph.website/Github/Thatsashortlink/version2.png" width="60%">

## Comming soon
- [x] Custom short URLs
- [x] Easy way to Delete short URLs
- [x] Login | Currently a Basic Login is Available
- [ ] Multiuser Support

## FAQ

Help! It's not starting. I get a `MongooseServerSelectonError: connect ECONNREFUSED 127.0.0.1:27017` Error.
> Check if you have MogoDB installed. Download it [here](https://www.mongodb.com/download-center/community)

## License
[Apache](https://github.com/JNSAPH/ThatsAShort.link/blob/master/LICENSE)
