import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBox({setAllSite, allSize}) {
    // const [allSize, setAllSite] = React.useState({})
    function onchangeHandler(event) {
      const key = event.target.value
      if(event.target.checked) {
        setAllSite({
              ...allSize,
              ...{[key]: key}
          })
      } else {
        let allSizeObject = { ...allSize }
        delete allSizeObject[key]
        setAllSite( allSizeObject )
      }
    }
  return (
    <FormGroup row={true}>
      <FormControlLabel
        value='XS'
        label="XS"
        control={<Checkbox checked={Boolean(allSize['XS'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='S'
        label="S"
        control={<Checkbox checked={Boolean(allSize['S'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='M'
        label="M"
        control={<Checkbox checked={Boolean(allSize['M'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='ML'
        label="ML"
        control={<Checkbox checked={Boolean(allSize['ML'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='L'
        label="L"
        control={<Checkbox checked={Boolean(allSize['L'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='XL'
        label="XL"
        control={<Checkbox checked={Boolean(allSize['XL'])}
        onChange={onchangeHandler}/>}
        />
      <FormControlLabel
        value='XXL'
        label="XXL"
        control={<Checkbox checked={Boolean(allSize['XXL'])}
        onChange={onchangeHandler}/>}
        />
    </FormGroup>
  );
}