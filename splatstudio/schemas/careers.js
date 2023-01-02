export default {
    name: 'careers',
    title: 'Careers',
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
        title: 'Title',
        type: 'string',
      },
      {
        title: 'Roles',
        name: 'roles',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Link',
        name: 'link',
        type: 'url'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  