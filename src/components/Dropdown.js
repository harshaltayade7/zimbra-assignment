import Select from 'react-select';
import _ from 'lodash';
import '../css/Dropdown.css'

/**
 * Dropdown - Functional component (takes list to show in dropdown)
 * @param {Array} props 
 */
export default function Dropdown(props) {
    const options = _.map(props.list, (item) => ({ value: item, label: item }));
    return (
        <div className='Dropdown'>
            <div className='categoryText'>Category</div>
            <div className='selectWrapper'>
                <Select
                    defaultValue={_.filter(options, (option) => option.value === props.defaultValue)}
                    options={options}
                    onChange={props.onSelectionChange}
                />
            </div>
        </div>
    )
}