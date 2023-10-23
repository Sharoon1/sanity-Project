
const studentReviews ={
   
    name: 'studentReviews',
    title: 'student Reviews',
    type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
 
    {
     title: 'Description',
     name: 'Review',
     type: 'text'
   },
  
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    
  ],
  preview: {
    select: {
      title: 'description',
      description: 'description',
    },
  },
}
export default studentReviews