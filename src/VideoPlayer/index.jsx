import React from 'react';

export default ({ id = '71h8MZshGSs'}) => <iframe id='existing-iframe-example'
        width='640' height='360'
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
        frameBorder='0'
        style={{border: "solid 4px #37474F"}}
></iframe>;
