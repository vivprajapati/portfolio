import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        --header-height: 120px;
    }

    @media (max-width: 768px) {
        html {
            --header-height: 180px;
        }
    }

    @media (max-width: 480px) {
        html {
            --header-height: 200px;
        }
    }

    body {
        font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
        background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0c0c0c 100%);
        color: #e0e0e0;
        line-height: 1.6;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        position: relative;
    }

    /* Glassmorphic Background Animations */
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(circle at 15% 25%, rgba(79, 70, 229, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 45% 55%, rgba(16, 185, 129, 0.06) 0%, transparent 35%),
            radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.06) 0%, transparent 35%),
            radial-gradient(circle at 25% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 35%);
        z-index: -2;
        pointer-events: none;
    }

    /* Floating Glassmorphic Circles */
    body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }

    /* Glassmorphic Floating Circles */
    .glass-circle {
        position: fixed;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        z-index: -1;
    }

    .glass-circle-1 {
        width: 120px;
        height: 120px;
        background: rgba(79, 70, 229, 0.08);
        border: 1px solid rgba(79, 70, 229, 0.15);
        animation: float-collision-1 15s linear infinite;
    }

    .glass-circle-2 {
        width: 80px;
        height: 80px;
        background: rgba(6, 182, 212, 0.08);
        border: 1px solid rgba(6, 182, 212, 0.15);
        animation: float-collision-2 18s linear infinite;
    }

    .glass-circle-3 {
        width: 100px;
        height: 100px;
        background: rgba(16, 185, 129, 0.08);
        border: 1px solid rgba(16, 185, 129, 0.15);
        animation: float-collision-3 20s linear infinite;
    }

    .glass-circle-4 {
        width: 60px;
        height: 60px;
        background: rgba(168, 85, 247, 0.08);
        border: 1px solid rgba(168, 85, 247, 0.15);
        animation: float-collision-4 12s linear infinite;
    }

    .glass-circle-5 {
        width: 90px;
        height: 90px;
        background: rgba(239, 68, 68, 0.08);
        border: 1px solid rgba(239, 68, 68, 0.15);
        animation: float-collision-5 22s linear infinite;
    }

    .glass-circle-6 {
        width: 70px;
        height: 70px;
        background: rgba(245, 158, 11, 0.08);
        border: 1px solid rgba(245, 158, 11, 0.15);
        animation: float-collision-6 16s linear infinite;
    }

    /* Header Styles */
    header {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(13, 13, 13, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        z-index: 1000;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    header h1 {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(135deg, #4f46e5, #06b6d4, #10b981);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.2rem;
    }

    header p {
        color: #94a3b8;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    header nav ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        flex-wrap: wrap;
    }

    header nav a {
        color: #cbd5e1;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        transition: all 0.3s ease;
    }

    header nav a:hover {
        color: #4f46e5;
    }

    header nav a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #4f46e5, #06b6d4);
        transition: width 0.3s ease;
    }

    header nav a:hover::after {
        width: 100%;
    }

    /* Main Content */
    main {
        margin-top: var(--header-height);
        padding-top: 2rem;
    }

    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
        position: relative;
        transition: all 0.3s ease;
    }

    section:hover {
        transform: translateY(-2px);
    }

    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #4f46e5, transparent);
        opacity: 0.5;
        transition: all 0.3s ease;
    }

    section:hover::before {
        width: 200px;
        opacity: 0.8;
    }

    /* Typography */
    h1, h2, h3 {
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #4f46e5, #06b6d4);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 3rem;
        position: relative;
    }

    h3 {
        font-size: 1.4rem;
        color: #f8fafc;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.1rem;
        color: #cbd5e1;
        margin-bottom: 1rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    /* Lists */
    ul {
        list-style: none;
    }

    /* Links */
    a {
        color: #4f46e5;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        -webkit-tap-highlight-color: rgba(79, 70, 229, 0.2);
        tap-highlight-color: rgba(79, 70, 229, 0.2);
    }

    a:hover {
        color: #06b6d4;
        transform: translateY(-1px);
    }

    /* Touch and interaction improvements */
    button, a, [role="button"] {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
    }

    /* Prevent zoom on input focus on iOS */
    input, textarea, select {
        font-size: 16px;
    }

    /* About Section */
    #about {
        text-align: center;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin: 2rem auto;
        margin-top: 6rem;
    }

    #about p {
        font-size: 1.2rem;
        line-height: 1.8;
        max-width: 600px;
    }

    /* Skills Section */
    #skills ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    #skills li {
        background: rgba(79, 70, 229, 0.1);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(79, 70, 229, 0.2);
        transition: all 0.3s ease;
        text-align: center;
        font-weight: 500;
    }

    #skills li:hover {
        transform: translateY(-5px);
        background: rgba(79, 70, 229, 0.15);
        border-color: rgba(79, 70, 229, 0.4);
        box-shadow: 0 10px 30px rgba(79, 70, 229, 0.2);
    }

    /* Experience Section */
    #experience > div {
        background: rgba(255, 255, 255, 0.02);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        border-left: 4px solid #4f46e5;
        transition: all 0.3s ease;
    }

    #experience > div:hover {
        transform: translateX(10px);
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    #experience h3 {
        color: #4f46e5;
        margin-bottom: 0.5rem;
    }

    #experience p {
        color: #94a3b8;
        font-size: 0.9rem;
        text-align: left;
        margin-bottom: 1rem;
    }

    #experience ul {
        text-align: left;
    }

    #experience li {
        color: #cbd5e1;
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    #experience li::before {
        content: '▶';
        position: absolute;
        left: 0;
        color: #4f46e5;
        font-size: 0.8rem;
    }

    /* Education Section */
    #education {
        text-align: center;
        background: rgba(6, 182, 212, 0.05);
        border-radius: 20px;
        border: 1px solid rgba(6, 182, 212, 0.1);
    }

    #education p {
        font-size: 1.1rem;
        color: #cbd5e1;
    }

    /* Achievements Section */
    #achievements > div > div {
        transition: all 0.3s ease;
    }

    #achievements > div > div:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    #achievements > div > div:nth-child(1):hover {
        background: rgba(79, 70, 229, 0.15);
        border-color: rgba(79, 70, 229, 0.4);
    }

    #achievements > div > div:nth-child(2):hover {
        background: rgba(6, 182, 212, 0.15);
        border-color: rgba(6, 182, 212, 0.4);
    }

    #achievements > div > div:nth-child(3):hover {
        background: rgba(16, 185, 129, 0.15);
        border-color: rgba(16, 185, 129, 0.4);
    }

    #achievements > div > div:nth-child(4):hover {
        background: rgba(168, 85, 247, 0.15);
        border-color: rgba(168, 85, 247, 0.4);
    }

    #achievements > div > div:nth-child(5):hover {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.4);
    }

    #achievements > div > div:nth-child(6):hover {
        background: rgba(245, 158, 11, 0.15);
        border-color: rgba(245, 158, 11, 0.4);
    }

    /* Projects Section */
    #projects ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    #projects li {
        background: rgba(255, 255, 255, 0.02);
        padding: 2rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
        text-align: center;
    }

    #projects li:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    #projects a {
        font-size: 1.1rem;
        font-weight: 600;
        display: block;
        padding: 1rem;
        border-radius: 10px;
        background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1));
        border: 1px solid rgba(79, 70, 229, 0.2);
        transition: all 0.3s ease;
    }

    #projects a:hover {
        background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(6, 182, 212, 0.2));
        border-color: rgba(79, 70, 229, 0.4);
        transform: scale(1.02);
    }

    /* Footer */
    footer {
        background: rgba(13, 13, 13, 0.8);
        padding: 3rem 2rem;
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    footer ul {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
    }

    footer a {
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.8rem 1.5rem;
        background: rgba(79, 70, 229, 0.1);
        border: 1px solid rgba(79, 70, 229, 0.2);
        border-radius: 25px;
        transition: all 0.3s ease;
        display: block;
    }

    footer a:hover {
        background: rgba(79, 70, 229, 0.2);
        border-color: rgba(79, 70, 229, 0.4);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
    }

    /* Contact Section */
    #contact {
        text-align: center;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin: 2rem auto;
    }

    #contact a:hover {
        background: rgba(79, 70, 229, 0.2);
        border-color: rgba(79, 70, 229, 0.4);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        section {
            padding: 3rem 1.5rem;
        }

        h2 {
            font-size: 2.2rem;
        }

        #skills > div {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        #projects > div {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    @media (max-width: 768px) {
        header {
            padding: 0.8rem 1rem;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        }

        header > div {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
        }

        header h1 {
            font-size: 1.4rem;
            margin-bottom: 0.3rem;
        }

        header p {
            font-size: 0.8rem;
            margin-bottom: 0.8rem;
        }

        header nav ul {
            gap: 0.8rem;
            justify-content: center;
        }

        header nav a {
            font-size: 0.9rem;
            padding: 0.3rem 0.6rem;
            border-radius: 15px;
            background: rgba(79, 70, 229, 0.1);
            border: 1px solid rgba(79, 70, 229, 0.2);
        }

        section {
            padding: 2.5rem 1rem;
            margin: 1rem auto;
        }

        h2 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
        }

        /* About Section Mobile */
        #about {
            margin: 2rem 1rem;
            margin-top: max(5rem, 20vh);
            padding: 2rem 1.5rem;
            padding-top: 3rem;
        }

        #about p {
            font-size: 1rem;
            max-width: 100%;
        }

        #about > div {
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        #about > div > div {
            min-width: auto;
        }

        /* Skills Section Mobile */
        #skills > div {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        #skills > div > div {
            padding: 1.5rem 1rem;
        }

        #skills > div > div h3 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        #skills li {
            padding: 1rem;
            font-size: 0.9rem;
        }

        /* Experience Section Mobile */
        #experience > div {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            transform: none !important;
        }

        #experience > div:hover {
            transform: none !important;
        }

        #experience > div > div {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start !important;
            text-align: left;
        }

        #experience > div > div > span {
            font-size: 0.8rem;
        }

        #experience h3 {
            font-size: 1.1rem;
        }

        #experience p {
            font-size: 0.85rem;
            text-align: left;
        }

        #experience li {
            font-size: 0.9rem;
            padding-left: 1.2rem;
        }

        /* Education Section Mobile */
        #education {
            margin: 1rem;
            padding: 2rem 1.5rem;
        }

        #education > div > div {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        #education > div > div > div {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start !important;
        }

        #education h3 {
            font-size: 1.1rem;
        }

        #education > div > div:last-child > div {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        /* Projects Section Mobile */
        #projects > div {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        #projects > div > div {
            padding: 1.5rem;
        }

        #projects h3 {
            font-size: 1.1rem;
        }

        #projects p {
            font-size: 0.9rem;
            text-align: left;
        }

        #projects a {
            padding: 0.8rem 1.2rem;
            font-size: 1rem;
        }

        /* Contact Section Mobile */
        #contact {
            margin: 1rem;
            padding: 2rem 1.5rem;
        }

        #contact > div {
            flex-direction: column;
            gap: 1rem;
        }

        #contact a {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            text-align: center;
        }

        /* Footer Mobile */
        footer {
            padding: 2rem 1rem;
        }

        footer > div:first-child h3 {
            font-size: 1.3rem;
        }

        footer > div:first-child p {
            font-size: 0.9rem;
        }

        footer > div:nth-child(2) {
            flex-direction: column;
            gap: 1rem;
        }

        footer a {
            padding: 0.8rem 1.2rem;
            font-size: 1rem;
            text-align: center;
        }

        footer > div:last-child p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        header {
            padding: 0.8rem;
        }

        header h1 {
            font-size: 1.2rem;
        }

        header p {
            font-size: 0.75rem;
        }

        header nav ul {
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
        }

        header nav a {
            font-size: 0.8rem;
            padding: 0.25rem 0.5rem;
        }

        section {
            padding: 2rem 0.8rem;
            margin: 0.8rem auto;
        }

        h2 {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
        }

        #about, #contact, #education {
            margin: 2rem 0.8rem;
            margin-top: 4rem;
            padding: 1.5rem 1rem;
            padding-top: 2.5rem;
        }

        #about > div {
            gap: 1rem;
        }

        #about > div > div h4 {
            font-size: 1.1rem;
        }

        #skills > div > div {
            padding: 1.2rem 0.8rem;
        }

        #experience > div {
            padding: 1.2rem;
        }

        #projects > div > div {
            padding: 1.2rem;
        }

        #projects > div > div > div {
            margin-bottom: 1rem;
        }

        #projects > div > div > div > span {
            padding: 0.25rem 0.6rem;
            font-size: 0.75rem;
            margin: 0.2rem;
            display: inline-block;
        }

        footer {
            padding: 1.5rem 0.8rem;
        }

        /* Fix any text overflow issues */
        * {
            word-wrap: break-word;
            overflow-wrap: break-word;
        }

        /* Ensure proper touch targets */
        a, button {
            min-height: 44px;
            min-width: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 360px) {
        header h1 {
            font-size: 1.1rem;
        }

        header nav a {
            font-size: 0.75rem;
            padding: 0.2rem 0.4rem;
        }

        h2 {
            font-size: 1.4rem;
        }

        section {
            padding: 1.5rem 0.6rem;
        }

        #about, #contact, #education {
            margin-top: 2rem;
            padding: 1.2rem 0.8rem;
        }

        #skills > div > div,
        #experience > div,
        #projects > div > div {
            padding: 1rem;
        }
    }

    /* Animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    @keyframes pulse-background {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }

    @keyframes grid-slide {
        0% {
            transform: translateX(0) translateY(0);
        }
        100% {
            transform: translateX(100px) translateY(100px);
        }
    }

    /* Glassmorphic Circle Collision Animations */
    @keyframes float-collision-1 {
        0% { transform: translate(-60px, 100vh) scale(1); }
        15% { transform: translate(20vw, 80vh) scale(1.1); }
        30% { transform: translate(40vw, 60vh) scale(0.9); }
        45% { transform: translate(70vw, 40vh) scale(1.2); }
        60% { transform: translate(90vw, 20vh) scale(0.8); }
        75% { transform: translate(110vw, 10vh) scale(1); }
        100% { transform: translate(120vw, -60px) scale(1); }
    }

    @keyframes float-collision-2 {
        0% { transform: translate(100vw, -40px) scale(1); }
        20% { transform: translate(80vw, 15vh) scale(0.8); }
        40% { transform: translate(60vw, 35vh) scale(1.3); }
        60% { transform: translate(40vw, 55vh) scale(0.9); }
        80% { transform: translate(20vw, 75vh) scale(1.1); }
        100% { transform: translate(-40px, 100vh) scale(1); }
    }

    @keyframes float-collision-3 {
        0% { transform: translate(-40px, 50vh) scale(1); }
        25% { transform: translate(25vw, 30vh) scale(1.2); }
        50% { transform: translate(50vw, 20vh) scale(0.7); }
        75% { transform: translate(75vw, 60vh) scale(1.4); }
        100% { transform: translate(100vw, 80vh) scale(1); }
    }

    @keyframes float-collision-4 {
        0% { transform: translate(50vw, -30px) scale(1); }
        20% { transform: translate(30vw, 20vh) scale(1.5); }
        40% { transform: translate(10vw, 40vh) scale(0.6); }
        60% { transform: translate(70vw, 70vh) scale(1.3); }
        80% { transform: translate(90vw, 90vh) scale(0.8); }
        100% { transform: translate(110vw, 110vh) scale(1); }
    }

    @keyframes float-collision-5 {
        0% { transform: translate(80vw, 100vh) scale(1); }
        15% { transform: translate(60vw, 80vh) scale(0.9); }
        30% { transform: translate(40vw, 50vh) scale(1.4); }
        45% { transform: translate(20vw, 30vh) scale(0.7); }
        60% { transform: translate(10vw, 10vh) scale(1.2); }
        75% { transform: translate(-20px, 5vh) scale(1); }
        100% { transform: translate(-60px, -30px) scale(1); }
    }

    @keyframes float-collision-6 {
        0% { transform: translate(30vw, 100vh) scale(1); }
        25% { transform: translate(60vw, 75vh) scale(1.3); }
        50% { transform: translate(80vw, 40vh) scale(0.8); }
        75% { transform: translate(50vw, 15vh) scale(1.1); }
        100% { transform: translate(20vw, -30px) scale(1); }
    }

    section {
        animation: fadeInUp 0.8s ease-out;
    }

    #experience > div:nth-child(odd) {
        animation: fadeInLeft 0.8s ease-out;
    }

    #experience > div:nth-child(even) {
        animation: fadeInRight 0.8s ease-out;
    }

    header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, transparent, #4f46e5, transparent);
        animation: pulse 2s infinite;
    }

    /* Performance optimizations for mobile */
    @media (max-width: 768px) {
        /* Reduce animations on mobile for better performance */
        *, *::before, *::after {
            animation-duration: 0.4s !important;
            animation-delay: 0s !important;
        }

        /* Reduce glassmorphic circle animations on mobile for better performance */
        .glass-circle {
            animation-duration: 20s !important;
        }

        .glass-circle-1, .glass-circle-2, .glass-circle-3,
        .glass-circle-4, .glass-circle-5, .glass-circle-6 {
            transform: scale(0.7) !important;
        }

        /* Optimize transforms for mobile */
        #experience > div:nth-child(odd),
        #experience > div:nth-child(even) {
            animation: fadeInUp 0.4s ease-out;
        }
    }

    /* Ultra-low power mode for very small devices */
    @media (max-width: 480px) {
        .glass-circle {
            display: none; /* Hide glassmorphic circles on very small devices */
        }
        
        * {
            animation-duration: 0.2s !important;
        }
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #1a1a1a;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #4f46e5, #06b6d4);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #3730a3, #0891b2);
    }
`;

export default GlobalStyle;
