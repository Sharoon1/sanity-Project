const about ={
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields:[
        {
            name:'heading',
            title:'About Heading',
            type: 'string'
        },
        {
            name:'discription',
            title:'discription',
            type:'text'
        },
        {
            title: 'Image',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              },
              {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          }
    ]
}
export default about