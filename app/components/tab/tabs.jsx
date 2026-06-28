'use client';
import { Eye, EyeOff } from 'lucide-react';
import styles from './tabs.module.css';
import { useState } from 'react';
const Tab = () => {

    const [activeTab, setActiveTab] = useState('signIn');
    const tabs = [
        { key: 'signIn', label: 'Sign in to account' },
        { key: 'signUp', label: 'Create new account' }
    ];
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const toggleVisibility = () => setIsVisible((prev) => !prev);
    const renderContent = () => {
        switch (activeTab) {
            case 'signIn':
                return (
                    <div>
                        <form action="">
                            <input type="email" name='email' placeholder='Email address' />
                            <div className={styles.passVisible}>
                                <input value={password}  onChange={(e) => setPassword(e.target.value)} type={isVisible ? "text" : "password"} placeholder='Password' />
                                <span type="button" onClick={toggleVisibility} className={styles.visibility} aria-label={isVisible ? "Hide password" : "Show password"} >
                                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                            </div>
                            <p>Forgot password?</p>
                            <button className="btn submit">Log in to account</button>
                        </form>
                    </div>
                )

            case 'signUp':
                return ( 
                    <div className=''>
                        <form action="">
                            <div className={styles.Double}>
                                <input name='firstName' type="text" placeholder='First Name' />
                                <input name='lastName' type="text" placeholder='Last Name' />
                            </div>
                            <input name='phoneNum' type="tel" placeholder='Phone number' />
                            <input name='email' type="email" placeholder='Email address' />
                            <div className={styles.passVisible}>                                
                                <input value={password}  onChange={(e) => setPassword(e.target.value)} type={isVisible ? "text" : "password"} placeholder='Password' />
                                <span type="button" onClick={toggleVisibility} className={styles.visibility} aria-label={isVisible ? "Hide password" : "Show password"} >
                                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                            </div>
                            <div className={styles.passVisible}>                                
                                <input value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} type={isVisible ? "text" : "password"} placeholder='Confirm Password' />
                                <span type="button" onClick={toggleVisibility} className={styles.visibility} aria-label={isVisible ? "Hide password" : "Show password"} >
                                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                            </div>
                            <p>Forgot password?</p>
                            <button className="btn submit">Create account</button>
                        </form>
                    </div>          
                );

        default:
            return null;
        }
    };
    return (  
        <div className={`${styles.container}`}>
            {/* Pill Tabs */}
            <h2>Sign in to continue</h2>
            <div className={`${styles.tabBar}`}>
                {tabs.map((tab) => (
                <div
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`btn ${styles.tab} ${
                    activeTab === tab.key ? styles.active : ''
                    }`}
                >
                    {tab.label}
                </div>
                ))}
            </div>

        {/* Content */}
        <div className='container'>{renderContent()}</div>
    </div>
    );
}
 
export default Tab;