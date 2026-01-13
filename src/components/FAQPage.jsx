import React, { useState } from 'react';
import { Search, RotateCw, Plus, ArrowUpDown, Download, GripVertical, ChevronDown } from 'lucide-react';
import './FAQPage.css';

const FAQPage = ({ activeView }) => {
    const [activeTopTab, setActiveTopTab] = useState('FAQ');
    const [activeUserType, setActiveUserType] = useState('Consumer');
    const [activeWebType, setActiveWebType] = useState('Home Page FAQ\'s'); // New state for Web view
    const [activeCategory, setActiveCategory] = useState('Consultation');

    const [isAddingNew, setIsAddingNew] = useState(false);
    const [showReplaceModal, setShowReplaceModal] = useState(false);
    const [showSelectReplaceModal, setShowSelectReplaceModal] = useState(false);
    const [addToHomepage, setAddToHomepage] = useState(false);
    const [selectedFaqId, setSelectedFaqId] = useState(null);
    const [expandedFaqIds, setExpandedFaqIds] = useState([]);

    const topTabs = ['Banners', 'Per Page Products', 'Ingredients', 'FAQ'];
    const categories = ['Consultation', 'Shop', 'Wallet', 'Forum', 'Additional'];

    const faqData = [
        { id: 1, question: "What types of consultations are available?", answer: "We offer video consultations, audio consultations, and chat-based consultations with our expert doctors." },
        { id: 2, question: "Can I get refund for the wallet money?", answer: "Yes, wallet money can be refunded to your original payment method within 5-7 business days." },
        { id: 3, question: "What is the Amrutam Forum?", answer: "Amrutam Forum is a community platform where users can discuss health topics and share experiences." },
        { id: 4, question: "Can I pause the audio consultation?", answer: "No, audio consultations cannot be paused once started. Please ensure you have sufficient time before beginning." },
        { id: 5, question: "Can I pause the audio consultation?", answer: "No, audio consultations cannot be paused once started. Please ensure you have sufficient time before beginning." },
        { id: 6, question: "Is there a minimum duration for an audio consultation?", answer: "Yes, the minimum duration for an audio consultation is 15 minutes." },
        { id: 7, question: "Is there a minimum duration for an audio consultation?", answer: "Yes, the minimum duration for an audio consultation is 15 minutes." },
        { id: 8, question: "What is the Amrutam Forum?", answer: "Amrutam Forum is a community platform where users can discuss health topics and share experiences." },
    ];

    const handleAddNewClick = () => {
        setIsAddingNew(true);
        setAddToHomepage(false); // Reset on new open
    };

    const handleCancelClick = () => {
        setIsAddingNew(false);
    };

    const handleSubmit = () => {
        if (addToHomepage) {
            // Simulate condition: Homepage has max number of FAQs
            setShowReplaceModal(true);
        } else {
            // Normal submit logic would go here
            setIsAddingNew(false);
        }
    };

    const handleCloseModal = () => {
        setShowReplaceModal(false);
    };

    const handleReplaceConfirm = () => {
        // Close the warning modal and open the selection modal
        setShowReplaceModal(false);
        setShowSelectReplaceModal(true);
        setSelectedFaqId(null); // Reset selection when opening modal
    };

    const handleFaqSelect = (faqId) => {
        // Toggle selection - only one FAQ can be selected at a time
        setSelectedFaqId(selectedFaqId === faqId ? null : faqId);
    };

    const toggleFaqExpansion = (faqId) => {
        setExpandedFaqIds(prev =>
            prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId]
        );
    };

    const handleCloseSelectReplaceModal = () => {
        setShowSelectReplaceModal(false);
        setIsAddingNew(false); // Close everything
    };

    const handleFinalReplace = () => {
        // Logic to actually replace the FAQ would go here
        setShowSelectReplaceModal(false);
        setIsAddingNew(false);
    };

    return (
        <div className="faq-page">
            {/* Modal Overlay */}


            {/* Modal - Select FAQ to Replace */}
            {showSelectReplaceModal && (
                <div className="modal-overlay" style={{ zIndex: 1200 }}>
                    <div className="modal-content replace-modal">
                        <h3 className="modal-title-center">Select the question that you would like to replace it with</h3>

                        <div className="replace-list">
                            {faqData.map(item => (
                                <div className="replace-item" key={item.id}>
                                    <div className="replace-item-left">
                                        <input
                                            type="checkbox"
                                            className="item-checkbox"
                                            checked={selectedFaqId === item.id}
                                            onChange={() => handleFaqSelect(item.id)}
                                        />
                                        <span className="replace-item-text">{item.question}</span>
                                    </div>
                                    <ChevronDown size={18} className="expand-icon" />
                                </div>
                            ))}
                        </div>

                        <div className="replace-actions">
                            <button className="btn-text-cancel" onClick={handleCloseSelectReplaceModal}>Cancel</button>
                            <button className="modal-btn replace" onClick={handleFinalReplace}>Replace</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add New FAQ Modal - MOVED HERE */}
            {isAddingNew && (
                <div className="modal-overlay">
                    <div className="modal-content large">
                        <div className="add-faq-form">
                            <h3 className="form-title">Add New FAQ</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select Platform <span className="required">*</span></label>
                                    <select className="form-select">
                                        <option>Consumer Web</option>
                                        <option>Consumer App</option>
                                        <option>Doctor Web</option>
                                        <option>Doctor App</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Select Title<span className="required">*</span></label>
                                    <select className="form-select">
                                        <option>Consultation</option>
                                        <option>Shop</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row checkbox-row">
                                <div
                                    className="custom-checkbox-wrapper"
                                    onClick={() => setAddToHomepage(!addToHomepage)}
                                >
                                    <div className={`circle-check ${addToHomepage ? 'active' : ''}`}>
                                        <div className="inner-dot"></div>
                                    </div>
                                    <span className="checkbox-label">Add to homepage as well</span>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Add Question <span className="required">*</span></label>
                                <textarea className="form-textarea" rows={4}></textarea>
                            </div>

                            <div className="form-group full-width">
                                <label>Add Answer <span className="required">*</span></label>
                                <textarea className="form-textarea" rows={6}></textarea>
                            </div>

                            <div className="form-actions">
                                <button className="btn-clear" onClick={handleCancelClick}>Clear all</button>
                                <button className="btn-submit" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Overlay for Replace Confirmation - MOVED HERE so it appears ON TOP of Add Form */}
            {showReplaceModal && (
                <div className="modal-overlay" style={{ zIndex: 1100 }}> {/* Added extra z-index to be safe */}
                    <div className="modal-content">
                        <p className="modal-text-red">Homepage already has maximum number of FAQ's.</p>
                        <p className="modal-text-bold">Would you like to replace it instead ?</p>

                        <div className="modal-actions">
                            <button className="modal-btn cancel" onClick={handleCloseModal}>Cancel</button>
                            <button className="modal-btn replace" onClick={handleReplaceConfirm}>Replace</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="breadcrumbs">
                <span className="crumb-green">FAQ</span> {' > '}
                <span className="crumb-gray">{activeView === 'web' ? 'Web' : 'App'}</span> {' > '}
                <span className="crumb-gray">Customization</span>
            </div>

            <div className="top-tabs">
                {topTabs.map(tab => (
                    <div
                        key={tab}
                        className={`top-tab ${activeTopTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTopTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="user-type-card">
                {activeView === 'app' ? (
                    <div className="user-type-toggle">
                        <div
                            className={`type-option ${activeUserType === 'Consumer' ? 'active' : ''}`}
                            onClick={() => setActiveUserType('Consumer')}
                        >
                            Consumer
                        </div>
                        <div
                            className={`type-option ${activeUserType === 'Doctor' ? 'active' : ''}`}
                            onClick={() => setActiveUserType('Doctor')}
                        >
                            Doctor
                        </div>
                    </div>
                ) : (
                    <div className="user-type-toggle">
                        <div
                            className={`type-option ${activeWebType === 'Home Page FAQ\'s' ? 'active' : ''}`}
                            onClick={() => setActiveWebType('Home Page FAQ\'s')}
                        >
                            Home Page FAQ's
                        </div>
                        <div
                            className={`type-option ${activeWebType === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveWebType('All')}
                        >
                            All
                        </div>
                    </div>
                )}
            </div>

            <div className="faq-content-card">
                <div className="list-header">
                    <div className="header-left-group">
                        <h3 className="list-title">FAQ List</h3>
                        <div className="search-box">
                            <Search size={16} className="search-icon-small" />
                            <input type="text" placeholder="Search here" />
                        </div>
                        <button className="icon-button outline">
                            <RotateCw size={16} />
                        </button>
                    </div>

                    <div className="header-right-group">
                        <button className="add-btn" onClick={handleAddNewClick}>
                            <Plus size={16} /> Add New FAQ
                        </button>
                        <button className="icon-button outline">
                            <ArrowUpDown size={16} />
                        </button>
                        <button className="icon-button outline">
                            <Download size={16} />
                        </button>
                    </div>
                </div>

                <div className="category-tabs">
                    {categories.map(cat => (
                        <div
                            key={cat}
                            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                <div className="faq-list">
                    {faqData.map(item => (
                        <div className="faq-item" key={item.id}>
                            <div className="item-left">
                                <GripVertical size={16} className="drag-handle" />
                                <input type="checkbox" className="item-checkbox" />
                                <span className="item-text">{item.question}</span>
                            </div>
                            <div className="item-right">
                                <ChevronDown size={18} className="expand-icon" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <div className="rows-per-page">Rows per page: 8</div>
                    <div className="page-controls">
                        <span className="page-info">1-8 of 80</span>
                        <button className="page-btn">{'<'}</button>
                        <button className="page-btn">{'>'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
