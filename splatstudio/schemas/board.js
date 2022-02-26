export default {
    name: 'board',
    title: 'Board',
    type: 'document',
    fields: [
      {
        name:'order',
        title:'Order',
        type:"number",
        hidden:true,
      },
      {
        title: 'Serial Number',
        name: 'number',
        type: 'number'
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
        {
            name: 'designation',
            title: 'Designation',
            type: 'string',
          },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  