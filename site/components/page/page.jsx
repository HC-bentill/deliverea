// import PropTypes from 'prop-types'
// import {Header} from '../header'
// import {Footer} from '../footer'

// const core = {
//   container: [
//     'h-screen',
//     'grid grid-cols-1 grid-rows-1',
//     'md:grid-cols-[minmax(2.5rem,_auto)_minmax(auto,_54rem)_minmax(2.5rem,auto)]',
//     'md:grid-rows-[5rem_auto_auto]',
//     'lg:grid-cols-[minmax(5rem,_auto)_minmax(auto,_80rem)_minmax(2.5rem,auto)]'
//   ].join(' '),
//   header: 'md:col-start-2 bg-white bg-opacity-80 backdrop-blur-sm'
// }

// export const Page = ({children, menuItems}) => {
//   const {container, header} = core

//   return (
//     <div className={container}>
//       <div className={header}>
//         <Header menuItems={menuItems}/>
//       </div>
//       <main className="col-span-full bg-blue-200">
//         <h1>Main</h1>
//       </main>
//       <footer className="col-start-2 bg-cyan-200">
//         <h1>Footer</h1>
//       </footer>
//     </div>
//   )
// }

// Page.propTypes = {
//   children: PropTypes.node.isRequired
// }

