const postCoursesNumber = {
  name: 'blogSection',
  title: 'Blog Categori',
  type: 'document',
fields: [ 
    {
      name: 'course',
      title: 'Posted courses',
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

],
}
export default postCoursesNumber


postCoursesNumber