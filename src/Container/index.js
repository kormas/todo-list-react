import "./style.css";

const Container = ({ children }) => (
    <main className="flex__container">
        {children}
    </main>
);

export default Container;