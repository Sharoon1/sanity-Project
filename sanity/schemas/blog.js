const Blog = {
    name: 'blog',
    title: 'Blog Section',
    type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Main Heading',
      type: 'string',
    },
    {
        name: 'posCategori',
        title: 'Post Categori',
        type: 'string',
      },
      
      {
        title: 'Post Courses Number',
        name: 'postNumber',
        type: 'number'
      } 
    ,{
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    
    {
      name: 'discription',
      title: 'Quote or something',
      type: 'text',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      }
  ],


  
  }
  export default Blog