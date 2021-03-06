'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">.msg Audit Tool Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-91a000f657816f6139588be6a2f21bce"' : 'data-target="#xs-components-links-module-AppModule-91a000f657816f6139588be6a2f21bce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-91a000f657816f6139588be6a2f21bce"' :
                                            'id="xs-components-links-module-AppModule-91a000f657816f6139588be6a2f21bce"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRouterModule.html" data-type="entity-link">AppRouterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuditOverviewModule.html" data-type="entity-link">AuditOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' : 'data-target="#xs-components-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' :
                                            'id="xs-components-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' }>
                                            <li class="link">
                                                <a href="components/AuditContactPersonCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditContactPersonCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' : 'data-target="#xs-pipes-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' :
                                            'id="xs-pipes-links-module-AuditOverviewModule-753c13c16d5ca3b248ce68907888b994"' }>
                                            <li class="link">
                                                <a href="pipes/CriteriaByFactorIdPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CriteriaByFactorIdPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/InterviewsByFacCritIdPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewsByFacCritIdPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuditOverviewRoutingModule.html" data-type="entity-link">AuditOverviewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuditsModule.html" data-type="entity-link">AuditsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' : 'data-target="#xs-components-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' :
                                            'id="xs-components-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' }>
                                            <li class="link">
                                                <a href="components/AuditCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' : 'data-target="#xs-pipes-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' :
                                            'id="xs-pipes-links-module-AuditsModule-ca4186cf3fabf1e1e80c5b178034f147"' }>
                                            <li class="link">
                                                <a href="pipes/SortAuditPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SortAuditPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuditsRoutingModule.html" data-type="entity-link">AuditsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPersonsModule.html" data-type="entity-link">ContactPersonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactPersonsModule-7f60409666cee9ac4b0c0f1f322e8c47"' : 'data-target="#xs-components-links-module-ContactPersonsModule-7f60409666cee9ac4b0c0f1f322e8c47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactPersonsModule-7f60409666cee9ac4b0c0f1f322e8c47"' :
                                            'id="xs-components-links-module-ContactPersonsModule-7f60409666cee9ac4b0c0f1f322e8c47"' }>
                                            <li class="link">
                                                <a href="components/ContactPersonCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPersonCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPersonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPersonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPersonsRoutingModule.html" data-type="entity-link">ContactPersonsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InterviewModule.html" data-type="entity-link">InterviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' : 'data-target="#xs-components-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' :
                                            'id="xs-components-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' }>
                                            <li class="link">
                                                <a href="components/AnswerQuestionListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswerQuestionListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' : 'data-target="#xs-pipes-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' :
                                            'id="xs-pipes-links-module-InterviewModule-5f83221b85e92d081b356da6106959d1"' }>
                                            <li class="link">
                                                <a href="pipes/AnswersByIdsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnswersByIdsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/QuestionByIdPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestionByIdPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InterviewRoutingModule.html" data-type="entity-link">InterviewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NebularModule.html" data-type="entity-link">NebularModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' : 'data-target="#xs-components-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' :
                                            'id="xs-components-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                            <li class="link">
                                                <a href="components/AddAuditDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddAuditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddContactPersonDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddContactPersonDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddInterviewDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddInterviewDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDiscardDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDiscardDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPersonFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactPersonFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAuditDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditAuditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditContactPersonDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditContactPersonDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InterviewFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarInterviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarInterviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarInterviewListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarInterviewListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' : 'data-target="#xs-directives-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' :
                                        'id="xs-directives-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                        <li class="link">
                                            <a href="directives/ActionListenerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionListenerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' : 'data-target="#xs-pipes-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' :
                                            'id="xs-pipes-links-module-SharedModule-063270b3c8710e138c39c61c535b8a4d"' }>
                                            <li class="link">
                                                <a href="pipes/CriteriasPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CriteriasPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FactorsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FactorsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractFormComponent.html" data-type="entity-link">AbstractFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddAudit.html" data-type="entity-link">AddAudit</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddContactPerson.html" data-type="entity-link">AddContactPerson</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddInterview.html" data-type="entity-link">AddInterview</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteAudit.html" data-type="entity-link">DeleteAudit</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteContactPerson.html" data-type="entity-link">DeleteContactPerson</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadFacCritsByInterviewId.html" data-type="entity-link">LoadFacCritsByInterviewId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Navigate.html" data-type="entity-link">Navigate</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnswer.html" data-type="entity-link">UpdateAnswer</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAudit.html" data-type="entity-link">UpdateAudit</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateContactPerson.html" data-type="entity-link">UpdateContactPerson</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInterview.html" data-type="entity-link">UpdateInterview</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnswerService.html" data-type="entity-link">AnswerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppRouterState.html" data-type="entity-link">AppRouterState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditService.html" data-type="entity-link">AuditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditState.html" data-type="entity-link">AuditState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactPersonService.html" data-type="entity-link">ContactPersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactPersonState.html" data-type="entity-link">ContactPersonState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacCritService.html" data-type="entity-link">FacCritService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterviewService.html" data-type="entity-link">InterviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterviewState.html" data-type="entity-link">InterviewState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link">QuestionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Answer.html" data-type="entity-link">Answer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppRouterStateModel.html" data-type="entity-link">AppRouterStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Audit.html" data-type="entity-link">Audit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditDto.html" data-type="entity-link">AuditDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuditStateModel.html" data-type="entity-link">AuditStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContactPerson.html" data-type="entity-link">ContactPerson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContactPersonStateModel.html" data-type="entity-link">ContactPersonStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacCrit.html" data-type="entity-link">FacCrit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Interview.html" data-type="entity-link">Interview</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewDto.html" data-type="entity-link">InterviewDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterviewStateModel.html" data-type="entity-link">InterviewStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostAuditDto.html" data-type="entity-link">PostAuditDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostInterviewDto.html" data-type="entity-link">PostInterviewDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PutAuditDto.html" data-type="entity-link">PutAuditDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PutInterviewDto.html" data-type="entity-link">PutInterviewDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Question.html" data-type="entity-link">Question</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});