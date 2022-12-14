# Sports-Discord /backend


[back-end data framework](https://media.git.generalassemb.ly/user/45445/files/565f3f7f-e8e7-47e4-a527-62d18a3b060a)

### Getting Started

This project exists so that is can be interactive among sports fans. They can discuss hot topic issues and share their opinion to others with comments. 

This back-end is currenlty deployed off fly.io(link below).

### Code Example
in topicController.js lines 29-37
Gives us the ability to add comments, and makes the page like a live chat feature.
```
router.put('/addComment/:id', (req, res) => {
  Topic.findById(req.params.id , async (error, topic) => {
      topic.comments.push(req.body.comment)
      await topic.save()
      Topic.find({}).then((topics) => {
        res.json(topics)
      })
  })
});
```
### Testing
We are able to test our back-end using Postman. 

### Contribution
If you would like to contribute code. 
- git clone it down
- do npm i
- create .env file

### Contribution Guidelines

[front-end-deployed](https://project3-front-end.vercel.app/)
[back-end-deployed](https://sports-discord.fly.dev/api/topics)
[back-end-github](https://github.com/koshy123/project3-back-end)
[front-end-github](https://github.com/koshy123/project3-front-end)

### Built With
-Mongoose
-MongoDB
-Node.js
-Express
-Dockerfile
-Postman


### Versioning
-Fly.io

### Authors
@Bigs55stock   
-Humza Zafarullah
@Max12345-ally    
-Max Bondar
@koshy123     
-Jeffrey Koshy

### Acknowledgments

David, Alo, Jan, Hayk , Katharyn

### Code Example
## Dec 10
-By Friday, our back end repo looks to be fully built out.
-Question. do we need the seed.js file. What does it do. should we delete the .json data.
Does that also meant to take out all .json refrence in index.js

Also, do i need to redeploy the back-end . that we made changes to controllers.
