const frontendHomeTop = {
  name: 'MainTopHeader',
  title: 'Home page top Headings',
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
      source: 'name',
      maxLength: 96,
    },
  },
  {
    name: 'subHeading',
    title: 'Sub Heading',
    type: 'string',
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
    name:'button',
    title: 'Button text',
    type: 'string'
  }
],
preview: {
  select: {
    title: 'name',
    discription: 'discription' ,   },
},

}
export default frontendHomeTop