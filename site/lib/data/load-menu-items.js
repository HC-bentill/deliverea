const menuItems = [
  {key: 1, children: 'Producto', href: '/producto'},
  {key: 2, children: 'Carriers', href: '/carriers'},
  {key: 3, children: 'Partners', href: '/partners'},
  {key: 4, children: 'Referencias', href: '/referencias'},
  {key: 5, children: 'Precios', href: '/precios'},
  {key: 6, children: 'Recursos', href: '/recursos'},
]

export const loadMenuItems = (locale) => new Promise((resolve, _) => {
  resolve({
    props: {
      menuItems
    }
  })
})
