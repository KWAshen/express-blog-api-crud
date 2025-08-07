const index = (req,res) => {
  res.send("Welcome to the Post Controller");
}

const show =(req,res) => {
  res.send(`Showing post with ID: ${req.params.id}`);
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
  res.send(`Post with ID: ${req.params.id} has been deleted`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
}