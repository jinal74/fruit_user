import React from 'react';
import Button, { ButtonType } from './common/Button/Button';

function Search(props) {
    return (
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close" /></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <Button buttonType={ButtonType.Primary} type="submit">Search <i className="fas fa-search" /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Search;