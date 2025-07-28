import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTheme } from '../../../contexts/ThemeContext';

function DropdownButtonOutline({onChangeFunc}) {
    const { theme, changeTheme } = useTheme();

    const handleClick = (eventKey, event) => {
        console.log(eventKey, 'Клик по пункту меню');
        console.log(event, 'TTTTTTTTTTTT');
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        changeTheme(eventKey)
    };

    return (
        <DropdownButton onSelect={handleClick} id="dropdown-basic-button" variant="outline-warning" title="Dropdown button">
            <Dropdown.Item eventKey="dusk-theme">Dusk</Dropdown.Item>
            <Dropdown.Item eventKey="crystal_frost-theme">Crystal Frost</Dropdown.Item>
            <Dropdown.Item eventKey="dawn-theme">Dawn</Dropdown.Item>
            <Dropdown.Item eventKey="florida_vibe-theme">Florida Vibe</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownButtonOutline;
