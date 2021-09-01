import * as React from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';

const titleRight = (<span>sub menu</span>);
const titleRight1 = (<span>sub menu 1</span>);
const titleRight2 = (<span>sub menu 2</span>);
const titleRight3 = (<span>sub menu 3</span>);

export const RcMenu = () => {

    const handleClick = (info) => {
        console.log(info);
    }

    return (
        <>
            <h2>JOBBO MIXES</h2>
            <div style={{ width: 400 }}>
                <Menu
                    onClick={handleClick}
                >
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/14CvBVPxKCiVOHLhYWg7wArDHpV5rFbQc/view?usp=sharing">SLAMMIN BEATZ 22</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1ueLS_UlzD-KDc1TzVPrjhuHtcCMagoaN/view?usp=sharing">SLAMMIN BEATZ 21</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1npCbEKN2Bf6_mbKr8n1P7_6WEIVTFPsK/view?usp=sharing">SLAMMIN BEATZ 20</a>
                    </MenuItem>
                </Menu>
            </div>

            <h2>JOBBO SINGLES</h2>
            <div style={{ width: 400 }}>
                <Menu
                    onClick={handleClick}
                >
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1wWsJdVWG5aSERwzpczXeB-Z--BeI1WcK/view?usp=sharing">SUITCASE REMIX</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/16Li8IfgWENQpoSsuVgeuS-MY9mXSCwqe/view?usp=sharing">GRIND</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1aq06tCzJ26BDe1avDZYs1_F3EvqqeRz3/view?usp=sharing">HEARTBREAK</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1-4o-5IEHn2AE-hInN2Gs2427EFtzdC0S/view?usp=sharing">CHECK IT</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="https://drive.google.com/file/d/1ikhGZvqcjNkzwAz7NqxR52umZJCzrROG/view?usp=sharing">ORBIT</a>
                    </MenuItem>

                </Menu>
            </div>
        </>
    );

}
