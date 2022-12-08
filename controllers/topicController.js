


  router.delete('/:id', (req, res) => {
    Topic.findOneAndDelete({
      _id: req.params.id,
    }).then((deleteTopic) => res.json(deleteTopic));
  });



  
