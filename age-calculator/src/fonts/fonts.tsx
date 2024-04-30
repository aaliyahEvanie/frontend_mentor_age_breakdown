import { Global } from '@emotion/react'

export const  Fonts = () => (
    <Global 
        styles={
            `
            @font-face {
                font-family: 'Poppins-Regular';
                font-weight: 400;
                font-style: normal;
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.eot');
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.woff2') format('woff2'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.woff') format('woff'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.ttf') format("truetype");
                font-display: swap;
            } 
            @font-face {
                font-family: 'Poppins-Bold';
                font-weight: 700;
                font-style: normal;
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.eot');
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.eot?#iefix') format('embedded-opentype'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.woff2') format('woff2'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.woff') format('woff'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Bold.ttf') format("truetype");
                font-display: swap;
            } 
            @font-face {
                font-family: 'Poppins-ExtraBold';
                font-weight: 800;
                font-style: normal;
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-ExtraBold.eot');
                src: url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-ExtraBold.eot?#iefix') format('embedded-opentype'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-ExtraBold.woff2') format('woff2'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-ExtraBold.woff') format('woff'),
                     url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-ExtraBold.ttf') format("truetype");
                font-display: swap;
            } 
            @font-face {
                font-family: 'Poppins-ExtraBold-Italic';
                font-weight: 800;
                font-style: italic;
                src: url('https://db.onlinewebfonts.com/t/1b317a90e2d9f421038a64ff976ce84d.eot');
                src: url('https://db.onlinewebfonts.com/t/1b317a90e2d9f421038a64ff976ce84d.eot?#iefix')format('embedded-opentype'),
                url('https://db.onlinewebfonts.com/t/1b317a90e2d9f421038a64ff976ce84d.woff2')format('woff2'),
                url('https://db.onlinewebfonts.com/t/1b317a90e2d9f421038a64ff976ce84d.woff')format('woff'),
                url('https://db.onlinewebfonts.com/t/1b317a90e2d9f421038a64ff976ce84d.ttf')format('truetype'),
                font-display: swap;
            }
            @font-face {
                font-family: 'Poppins-Italic';
                font-style: italic;
                src: url('https://db.onlinewebfonts.com/t/1b5cbf2c52ec70e1aa44a9548217905b.eot');
                src: url('https://db.onlinewebfonts.com/t/1b5cbf2c52ec70e1aa44a9548217905b.eot?#iefix')format('embedded-opentype'),
                url('https://db.onlinewebfonts.com/t/1b5cbf2c52ec70e1aa44a9548217905b.woff2')format('woff2'),
                url('https://db.onlinewebfonts.com/t/1b5cbf2c52ec70e1aa44a9548217905b.woff')format('woff'),
                url('https://db.onlinewebfonts.com/t/1b5cbf2c52ec70e1aa44a9548217905b.ttf')format('truetype'),
                font-display: swap;
            }
                `
        }
        />
) 