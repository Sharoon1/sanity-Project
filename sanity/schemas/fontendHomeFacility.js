
const frontendHomeFacility ={
   
     name: 'facilityHome',
     title: 'Facility Home card',
     type: 'document',
   fields: [
     {
       name: 'name',
       title: 'Name',
       type: 'string',
     },
  
     {
      title: 'Description',
      name: 'description',
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
export default frontendHomeFacility