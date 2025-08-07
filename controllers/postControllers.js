const post = require('./data/posts.js');

const index = (req,res) => {
  res.json(post);
}

const show =(req,res) => {
  res.send(`Showing post with ID: ${req.params.id}`);


const post = posts.find(item => item.id === id );

res.json(post);
}

const store = (req,res) => {
  res.send("Post created successfully");
}

const update = (req,res) => {
  res.send(`Total modify with ID: ${req.params.id} updated successfully`);
}

const modify = (req,res) => {
  res.send(`Post with ID: ${req.params.id} has been modified`);
}

const destroy = (req,res) =>{
  const post = post.find(item=> item.id === id);

  posts.splice(posts.indexOf(post),1);
  res.sendStatus(204);
  
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
}