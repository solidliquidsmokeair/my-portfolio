import './App.css';

function Header(props) {
  return (
    <div className="navBar">

        <div className="title">

            <h1 className="titleName">solid<br/>liquid<br/>smoke<br/>air.</h1>

                <div>
                    <ul className="menuItems">
                        <li className="menuItem">bio</li>
                        <li className="menuItem">contact</li>
                        <li className="menuItem">projects</li>
                        <li className="menuItem">aspirations</li>
                    </ul>
                </div>
        

      </div>

      <h1>{props.name}</h1>
      

    </div>
  );
}

export default Header;
