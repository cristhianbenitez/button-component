import './app.css';
import Button from './components/Button-Component';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Buttons</h1>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button />'`}</span>
            <Button />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button hover="hover" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button variant='outline'/>'`}</span>
            <Button variant="outline" />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant="outline" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button variant='text' />'`}</span>
            <Button variant="text" />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant="text" />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button disableShadow />'`}</span>
            <Button variant="contained" disableShadow />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button disabled />'`}</span>
            <Button disabled />
          </div>
          <div className="button-container">
            <span className="gray-text">
              {`<Button variant='text'disabled />'`}
            </span>
            <Button variant="text" disabled />
          </div>
        </div>
        <div className="row">
          <div className="button-container">
            <span className="regular-text">{`<Button variant='text' />'`}</span>
            <Button variant="text" />
          </div>
          <div className="button-container">
            <span className="gray-text">&:hover, &:focus</span>
            <Button variant="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
