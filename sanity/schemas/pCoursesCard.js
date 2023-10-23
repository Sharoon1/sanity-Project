const pCoursesCard = {
    name: 'courseP',
    title: 'page Courses card',
    type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
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
      title: 'Course Detail',
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
  ],
  preview: {
    select: {
      title: 'name',
      discription: 'discription' ,   },
  },

}
export default pCoursesCard