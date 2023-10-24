import "./style.css";

const Container = ({ children }) => (
    <div className="flex">
        <main className="flex__container">
            {children}
        </main>
    </div>
);

export default Container;