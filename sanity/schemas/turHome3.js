const truHome3
 = {
  name: 'truHome3',
  title: 'Tour card',
  type: 'document',
fields: [
  {
    name: 'name',
    title: 'Main Heading',
    type: 'string',
  },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      hotspot: true // <-- Defaults to false
    },
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


}
export default truHome3
