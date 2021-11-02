questions = [
    { //Main
        str: 'How can I help you today?',
        choices: ['I would like to know about Institutional Data.', 'I would like to know about Data Access', 'I would like to know about External Resources', 'I would like to know about IR', 'I would like to know about Data Governance', 'I would like to know about Data Protection'],
        index: 1
    },
    { //Data Requests
        str: 'What do you want to know about data Requests?',
        choices: ['I received data but it is innacurate or differs from data on the IR website', 'I want to know more about giving and recieving data requests', 'Can I request data?'],
        index:2
    },
    { //I received data but it is innacurate or differs from data on the IR website 
        str: 'You may want to contact IR.',
        choices: ['How soon can I hear back?', 'How do i contact IR?'],
        index:3
    },
    { //Data Access
        str: 'What would you like to know about Data access?',
        choices: ['I want to access Tableau Dashboards', 'I want to access grant proposals and reports','I have questions about Data Requests'],
        index:4
    },
    { //External Resources
        str: 'What would you like to know about External Resources?',
        choices: ['I have questions about IPEDS', 'I have questions about college navigator.','I have questions about benchmarking data'],
        index:5
    },
    {//Insatitutional Data
        str: 'What would you like to know about institutional Data?',
        choices: ['What is CDS and what data is in it?', 'I have questions about student data.','I have questions about Data Requests','Can I suggest data?', 'I have questions about Tableau Dashboards.'],
        index:6
    },
    { //Data Governance
        str: 'What would you like about data governance?',
        choices: ['What is data governance?', 'What are data definitions?'],
        index:7
    },
    {
        //About IR
        str: 'What do you want to know about IR?',
        choices: ['About', 'Contact'],
        index:8
    },
    {
        //Data Protection
        str: 'What do you want to know about Data Protection?',
        choices: ['FERPA Questions', 'What counts as an educational record?', 'What counts as a  school official?', 'What counts as a legitimate educational interest?'],
        index:9
    },
    {
        //About IR
        str: 'The Office of Institutional Research (IR) serves the university by empowering stakeholders to make data-informed decisions. \
        This includes the following areas: 1) identify data/information needs, \
        2) collect, analyze, interpret and report data/information, \
        3) support and lead strategic planning, accreditation, and assessment initiatives, \
        4) serve as stewards of data/information, 5) educate information producers, users, and consumers. \
        /n Mission Statement: The Office of Institutional Research (IR) provides and coordinates information support for reporting, \
        decision-making, and planning activities to help fulfill the stated mission and goals of the University of Portland. ',
        choices:['Do you have any other questions?'],
        index: 10
    },
    {
        //Contact IR
        str: 'Initial, brief phone calls are appreciated as this contact often helps clarify your request. 503.943.8000',
        choices:['Do you have any other questions?'],
        index:11
    },
    {
        //Grant Proposals and requests
        str: 'Please refer to the most recent version of the Faculty Handbook for the University Relations Institutional Policy for All University Grants. \
        The University Relations/Office of Development centralizes the grant process (grant submission and reporting) \
        for the entire University of Portland.',
        choices:['Do you have any other questions?'],
        index:12
    },
    {
        //Accessing Tableau Dashboards
        str: 'Please login to the UP Pilots portal and navigate to the Institutional Research site. \
        Click on link for Internal Data and Dashboards.  In order to view any internal dashboards, you need Tableau Reader software.\
        The software should be installed on your computer as part of regular system upgrades, however you can download the Reader via \
        the link on the IR site.  Then you will be able to click on the link for the desired internal dashboard to download and view it. ',
        choices:['Do you have any other questions?'],
        index:13
    },
    {
        //What are Tableau Dashboards
        //This one has a hyperlink in that we'll have to implement
        str: 'The IR office is working to make data available via Tableau Dashboards. \
        View the Tableau dashboard site to get oriented and access supporting documentation. \
        The dashboards are powered by Tableau software, which means the data is available all the time, \
        updated regularly and directly from Banner, and is interactive.',
        choices:['Do you have any other questions?'],
        index:14
    },
    {
        //What is CDS and how can I access it
        //this one has hyperlinks
        str: 'The Common Data Set (CDS) initiative is a collaborative effort among data providers in the higher education \
        community such as the IR office and data publishers such as the College Board, Peterson’s, and the U.S. News & World Report. \
        The goal is to improve data quality and accuracy, as well as reduce the reporting burden on data providers. \
        The CDS provides standards and data definitions that have been vetted widely within the higher education community. \
        Whenever possible the IR office provides data that adheres to the CDS reporting standards. The CDS is often requested by \
        external resource agencies and can be found at the link below. Additional details on standards and data definitions are available \
        at www.commondataset.org \nRead the Common Data Set archives for the University of Portland. \n\
        CDS data is available for every academic year going back to 2002.  The pdf files are sorted into the following sections:\n \
        A) Basic institutional profile information\n B) Enrollment and Persistence (undergraduate and graduate enrollment, enrollment \
        by race/ethnicity, degrees awarded, Four and six year graduation rates, 1st year retention rate)\n C) Freshman Admission \
        (applications, admittances, admissions requirements, SAT and high school GPA)\n D) Transfer Admission (applications, admittances, \
        admissions requirements)\n E) Academic Offerings and Policies\n F) Student Life (out-of-state residents, activities offered)\n G) \
        Annual Expenses (cost of attendance)\n H) Financial Aid (aid awarded to enrolled undergraduates)\n I) Faculty and Class Size \
        (faculty headcount, student to faculty ratio, class size)\n J) Degrees Conferred (degrees awarded by major)',
        choices:['Do you have any other questions?'],
        index:15
    },
    {
        //How can I suggest new data
        str: "The IR Office is always receptive to feedback on how to provide better service that supports the university community. \
        Please take 5 minutes to complete an anonymous feedback form.  This form can be used to suggest additional content \
        you'd like to see available on the IR Office website, rate the IR Office's service, \
        and provide general feedback.\nClick here to access the feedback form.",
        choices:['Do you have any other questions?'],
        index:16
    },
    {
        //I am a student can I request data
        str: 'Unfortunately, it is not the role of the IR office to directly assist students with research and/or class projects. \
        Rather the IR office’s priorities are focused on keeping UP in compliance with external reporting and informing UP faculty \
        and staff on data that assists them with making sound policy decisions.  The personal interest and motivation of the IR office is \
        focused on improving the quality of life for all students.',
        choices:['Do you have any other questions?'],
        index:17
    },
    {
        //I am a faculty/staff can I request data
        str: 'A lot depends on the purpose of the request. \
        The IR office has ongoing plans to make common aggregate metrics needed for accreditation and assessment purposes available \
        on the IR website using Tableau dashboards.  Because the university-wide strategic plan is a major focus of the IR office, data \
        requests with the purpose of supporting the strategic plan are a high priority.  However, external agencies often make data requests \
        with very little turnaround time.  Mandatory reporting to the federal government (i.e. IPEDS) is ongoing throughout the year and is \
        another major task.  Other mandatory reporting to ensure continued funding from grant agencies are prioritized.  \
        Requests from media reporters, educational institution ranking agencies, and data sharing consortiums also typically require diligent \
        attention.  Therefore, if the purpose of the request ties to these ongoing projects, it is welcome. For requests of individual level \
        data, please refer to FAQs on Data Protection.',
        choices:['Do you have any other questions?'],
        index: 18
    },
    {
        //I am outside of the UP community can I request data
        str: 'It entirely depends on the purpose of the request, including whether this is a new or recurring request.  \
        Please see other Data Access FAQs for further information.',
        choices:['Do you have any other questions?'],
        index: 19
    },
    {
        //how soon can I hear back
        str: 'While the IR office is always available to serve as a resource to the UP community, please note the current volume of \
        data requests and projects makes it difficult to provide data in a timely manner.  There is no standard turnaround time given \
        that requests vary widely in their complexity.  The office endeavors to provide data as quickly as possible, however it is best \
        to provide as much notice as possible if you have a data request tied to a deadline.  Please make it clear in the data request \
        submission form what your timeline is and feel free to follow up with the IR office, as needed.',
        choices:['Do you have any other questions?'],
        index:20
    },
    {
        //contacting IR with specific data request
        str:'Initial, brief phone calls are appreciated as this contact often helps clarify your request. Second, please submit a detailed \
        request via the link to Submit a Data Request. The Data Request Form asks for your request’s purpose, timeline, description, and \
        attachments. A lack of detail is the number one cause for delays in providing data! Once you have submitted your data request, you \
        will receive an automatic email reply confirming the request has been entered into the request system. You can reply to the email \
        with any relevant documents. Turnaround is greatly expedited if you can forward any previous reports, tables/charts, surveys, data \
        definitions, etc. Providing previous reports also allows the IR office to validate its method and ensure the new product is accurate. \
        Lastly, it is critical to describe the data request’s purpose AND timeline. It allows the IR office to recommend other data that can \
        support the request, it ensures the IR office is not assisting with redundant work (e.g. two members of the same committee inadvertently \
        requesting the same data), it allows the IR office to best prioritize the request, and it makes clear to the IR office when you need \
        the data report.',
        choices:['Do you have any other questions?'],
        index:21
    },
    {
        //email data request
        //hyperlink inside
        str: 'Please use the Submit a Data Request link. This standardized way of documenting data requests ensures your request does not \
        get overlooked in an email inbox. The link already submits your data request as an email and if submitted successfully, the system \
        will automatically email you a confirmation of your submission. The system also will allow you to save your request as a PDF document \
        that you should save for your records. Please do not email individual staff members with data requests.',
        choices:['Do you have any other questions?'],
        index:22
    },
    {
        //suggest new terms to add
        //hyperlink inside
        str: 'Please feel free to suggest new terms you would like defined to support your data informed activities by reaching out to any \
        staff in the IR office. You can also submit anonymous suggestions and general feedback using the brief, online Feedback Form.',
        choices:['Do you have any other questions?'],
        index:23
    },
    {
        //what counts as an educational record
        str: 'An educational record is any official and confidential document/record related to a student.  It can be in any form of media \
        (paper or electronic).  It can include the following, but is not limited to: grades, transcripts, class lists, student course schedules, \
        financial information, discipline files, information about difficulties in a class or at school if in a record, social security number, \
        and anything with a student ID number.  The following are NOT educational records: personal notes (e.g. faculty member’s private notes), \
        law enforcement or campus security records, health records, or employment and payroll information.',
        choices:['Do you have any other questions?'],
        index:24
    },
    {
        //what counts as a school official
        str: 'A person employed by the school in an administrative, supervisory, academic, research, support staff position, person serving \
        on the Board of Regents, a student serving on an official committee (such as a grievance or disciplinary committee), or a volunteer \
        or outside contractor under certain circumstances.',
        choices:['Do you have any other questions?'],
        index:25
    },
    {
        //what counts as a legitimate educational interest
        str: 'A legitimate educational interest is defined as the need to review an education record in order to fulfill the school \
        official’s professional responsibilities for the school.',
        choices:['Do you have any other questions?'],
        index:26
    },
    {
        //what is FERPA and how does it apply
        //hyperlink inside
        str: 'FERPA is the Family Educational Rights and Privacy Act, a federal law that protects the privacy of student educational \
        records and gives students certain rights over their educational records.  The law applies to all schools who receive federal \
        funds, including the University of Portland.  Current and former students are protected under FERPA, and protection begins once \
        a student enrolls. Additional information is available from the Registrar’s Office and the U.S. Dept of Education.\n \
        There are certain circumstances when educational records can be disclosed without a student’s consent such as to school officials \
        with a legitimate educational interest and to accrediting organizations Generally, the IR Office does not provide data regarding \
        individuals.  The IR Office takes seriously our responsibility to protect all confidential, personal data.  Please see FERPA \
        resources cited in other FAQs regarding what circumstances data at the individual level can be provided.  It should be highlighted \
        that accessing financial aid data (e.g. Pell eligibility) at the individual level is only possible under a restricted set of \
        circumstances.  The IR Office generally only provides data at the aggregated level.',
        choices:['Do you have any other questions?'],
        index:27
    },
    {
        //FERPA standards and individual data
        str: 'If the IR Office agrees that the data request for individual level data is considered appropriate given FERPA regulations, \
        it is usually necessary for the data requestor to provide student identifiers (e.g. Banner ID numbers) to facilitate the IR office \
        accessing individual level data.  Failure to provide an identifier increases the complexity of the data request, imposes a significant \
        resource burden on the IR office to access and clean the data, and lengthens the turnaround to respond to a data request.',
        choices:['Do you have any other questions?'],
        index:28
    },
    {
        //benchmarking data
        str: "The IR office website's list of External Resources is available at this link. The IR office's website's External Resources \
        section feature downloadable tutorials on accessing data for benchmarking. Different external resources vary in the level of data \
        detail they provide and in the customizability of choosing comparison schools. Comparing institutions using IPEDS provides the most \
        detailed benchmarking data. College Navigator provides the most commonly requested IPEDS data. IPEDS Data Feedback Reports provide \
        overview data with a pre-selected group of comparison schools.",
        choices:['Do you have any other questions?'],
        index:29
    },
    {
        //college navigator
        //hyperlink inside
        str: "The U.S. Department of Education’s National Center for Education Statistics (NCES) maintains this online data repository. \
        It provides commonly requested IPEDS data such as graduation rate in an easily accessible site to the public. See the additional \
        FAQs for a list of what kind of data is available and how to use this data source for benchmarking. This website is available at this \
        link and is also listed in the IR website's External Resources.",
        choices:['Do you have any other questions?'],
        index:30
    },
    {
        //
        choices:['Do you have any other questions?'], 
        index: 31       
    }
    

]

    

function choice1Handler(Answerindex,previousQuestionIndex){
    //send json (string,choices,index)
    newIndex = 0
    if(previousQuestionIndex == 0 && Answerindex == 1){
        newIndex = 1
    }
    Obj = {
        "String":string[answer],
        "choices":choice,
        "index":index
    }
    return Obj
}
