import React from 'react';
import { Button
} from '../../lib/style/generalStyles';




const Button = ()  => {
    return(
    <Button
        buttonText="Find out more"
        to= {`/event/${event.id}`}
    />
  );
}
export default Button;
