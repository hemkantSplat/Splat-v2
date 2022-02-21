export default {
    name: 'team',
    title: 'Teams',
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
  