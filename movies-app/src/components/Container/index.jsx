import styles from './Container.module.css'

{/* children são props (parâmetros da classe Container}*/}
function Container({children}) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container