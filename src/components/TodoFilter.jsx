const TodoFilter = ({changeFilter}) => {
    return (
        <section className="m-5 py-3 px-10 flex justify-evenly rounded bg-very-light-gray text-dark-g-blue font-bold dark:bg-very-dark-desaturated-blue dark:text-dark-grayish-blue">
        <button className="hover:text-bright-blue active:text-bright-blue" 
            onClick={() => changeFilter('all')}>
            All</button>
        <button className="hover:text-bright-blue active:text-bright-blue" 
            onClick={() => changeFilter('active')}>
            Active</button>
        <button className="hover:text-bright-blue active:text-bright-blue" 
            onClick={() => changeFilter('completed')}>
            Complete</button>
      </section>
    )
}

export default TodoFilter