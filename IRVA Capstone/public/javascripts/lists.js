/**
 * 
 * answer indexes below 
 */

//1:How can I help you today?
//2:What do you want to know about data Requests?
//3:You may want to contact IR.
//4:What would you like to know about Data access?
//5:What would you like to know about External Resources?
//6:What would you like to know about institutional Data?
//7:What would you like about data governance?
//8:What do you want to know about IR?
//9:What do you want to know about Data Protection?
//10:About IR
//11:Contact IR
//12:Grants and Proposals
//13:Accessing Tableu
//14:What are Tableu
//15:What is CDS
//16:Suggest Data
//17:Student Requesting
//18:Professor Staff requesting
//19:Outside UP requesting
//20:how soon can I hear back
//21:contacting IR with specific request
//22:email data to IR
//23:suggest new terms
//24:what counts as educational record
//25:what counts as school official
//26:what counts as legit educational interest
//27:what is FERPA and how does it apply
//28:what are FERPA's standards
//29:benchmarking data
//30:college navigator

//31:Do you have any other questions?
//32:What do you want to know about FERPA?

//33:what is data governance and why is it important
//34:what is IPEDS
//35:use college navigator to get IPEDS data
//36:what is IPEDS data feedback report
//37:data definitions
//38:data governance priorities
//39:making time for data related tasks
//40:what is IRB
//41:student data of fall semester
//42:how many students were enrolled during certain period of time
//43:how many majors were enrolled during certain period of time
//44:breakdown of ethnicity
//45:retention rate for given cohort
//46:grad rate for given cohort
//47:how do I get data


questions = [
    { //Main
        str: 'How can I help you today?',
        choices: ['I would like to know about Institutional Data.', 'I would like to know about Data Access', 'I would like to know about External Resources', 'I would like to know about IR', 'I would like to know about Data Governance', 'I would like to know about Data Protection'],
        indices:[5,3,4,7,6,8] ,
        index: 0

        /*
        Handler Pseudo::
        *previousquestion, answerindex
        *new index  questions[previousquestion].indices[answerindex]
        *return question[newindex-1]
        
        
        
        */ 
    },
    { //Data Requests
        str: 'What do you want to know about data Requests?',
        choices: ['I received data but it is innacurate <br/> or differs from data on the IR website', 'I want to know more about giving and <br/> recieving data requests', 'Can I request data?'],
        indices:[2,3,47] ,
        index:1
    },
    { //I received data but it is innacurate or differs from data on the IR website 
        str: 'You may want to contact IR.',
        choices: ['How soon can I hear back?', 'How do I contact IR?'],
        indices:[19,20],
        index:2
    },
    { //Data Access
        str: 'What would you like to know about Data access?',
        choices: ['I want to access Tableau Dashboards', 'I want to access grant proposals and reports','I have questions about Data Requests'],
        indices:[13,12,47] ,
        index:3
    },
    { //External Resources
        str: 'What would you like to know about External Resources?',
        choices: ['I have questions about IPEDS', 'I have questions about college navigator.','I have questions about benchmarking data'],
        indices:[33,34,28],
        index:4
    },
    {//Insatitutional Data
        str: 'What would you like to know about institutional Data?',
        choices: ['What is CDS and what data is in it?', 'I have questions about student data.','I have questions about Data Requests','Can I suggest data?', 'I have questions about Tableau Dashboards.'],
        indices:[14,40,16,15,13] ,
        index:5
    },
    { //Data Governance
        str: 'What would you like about data governance?',
        choices: ['What is data governance?', 'What are data definitions?','I would like to know about data governance priorities.','How does IR make time for Data related tasks?' ],
        indices:[32,36,37,38] ,
        index:6
    },
    {
        //About IR
        str: 'What do you want to know about IR?',
        choices: ['About', 'Contact'],
        indices:[9,10] ,
        index:7
    },
    {
        //Data Protection
        str: 'What do you want to know about Data Protection?',
        choices: ['FERPA Questions', 'What counts as an educational record?', 'What counts as a  school official?', 'What counts as a legitimate educational interest?'],
        indices:[31,23,24,25] ,
        index:8
    },
    {
        //About IR
        //has hyperlink
        str: 'The Office of Institutional Research (IR) serves the university by empowering stakeholders to make data-informed decisions. \
        This includes the following areas: 1) identify data/information needs, \
        2) collect, analyze, interpret and report data/information, \
        3) support and lead strategic planning, accreditation, and assessment initiatives, \
        4) serve as stewards of data/information, 5) educate information producers, users, and consumers. \
        /n Mission Statement: The Office of Institutional Research (IR) provides and coordinates information support for reporting, \
        decision-making, and planning activities to help fulfill the stated mission and goals of the University of Portland. ',
        choices:['Do you have any other questions?'],
        indices:[0],
        index: 9
    },
    {
        //Contact IR
        str: 'Initial, brief phone calls are appreciated as this contact often helps clarify your request. 503.943.8000',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:10
    },
    {
        //Grant Proposals and requests
        str: 'Please refer to the most recent version of the Faculty Handbook for the University Relations Institutional Policy for All University Grants. \
        The University Relations/Office of Development centralizes the grant process (grant submission and reporting) \
        for the entire University of Portland.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:11
    },
    {
        //Accessing Tableau Dashboards
        str: 'Please login to the UP Pilots portal and navigate to the Institutional Research site. \
        Click on link for Internal Data and Dashboards.  In order to view any internal dashboards, you need Tableau Reader software.\
        The software should be installed on your computer as part of regular system upgrades, however you can download the Reader via \
        the link on the IR site.  Then you will be able to click on the link for the desired internal dashboard to download and view it. ',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:12
    },
    {
        //What are Tableau Dashboards
        //This one has a hyperlink in that we'll have to implement
        str: 'The IR office is working to make data available via Tableau Dashboards. \
        View the Tableau dashboard site to get oriented and access supporting documentation. \
        The dashboards are powered by Tableau software, which means the data is available all the time, \
        updated regularly and directly from Banner, and is interactive.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:13
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
        indices:[0],
        index:14
    },
    {
        //How can I suggest new data
        str: "The IR Office is always receptive to feedback on how to provide better service that supports the university community. \
        Please take 5 minutes to complete an anonymous feedback form.  This form can be used to suggest additional content \
        you'd like to see available on the IR Office website, rate the IR Office's service, \
        and provide general feedback.\nClick here to access the feedback form.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:15
    },
    {
        //I am a student can I request data
        str: 'Unfortunately, it is not the role of the IR office to directly assist students with research and/or class projects. \
        Rather the IR offices priorities are focused on keeping UP in compliance with external reporting and informing UP faculty \
        and staff on data that assists them with making sound policy decisions.  The personal interest and motivation of the IR office is \
        focused on improving the quality of life for all students.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:16
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
        indices:[0],
        index: 17
    },
    {
        //I am outside of the UP community can I request data
        str: 'It entirely depends on the purpose of the request, including whether this is a new or recurring request.  \
        Please see other Data Access FAQs for further information.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index: 18
    },
    {
        //how soon can I hear back
        str: 'While the IR office is always available to serve as a resource to the UP community, please note the current volume of \
        data requests and projects makes it difficult to provide data in a timely manner.  There is no standard turnaround time given \
        that requests vary widely in their complexity.  The office endeavors to provide data as quickly as possible, however it is best \
        to provide as much notice as possible if you have a data request tied to a deadline.  Please make it clear in the data request \
        submission form what your timeline is and feel free to follow up with the IR office, as needed.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:19
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
        indices:[0],
        index:20
    },
    {
        //email data request
        //hyperlink inside
        str: 'Please use the Submit a Data Request link. This standardized way of documenting data requests ensures your request does not \
        get overlooked in an email inbox. The link already submits your data request as an email and if submitted successfully, the system \
        will automatically email you a confirmation of your submission. The system also will allow you to save your request as a PDF document \
        that you should save for your records. Please do not email individual staff members with data requests.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:21
    },
    {
        //suggest new terms to add
        //hyperlink inside
        str: 'Please feel free to suggest new terms you would like defined to support your data informed activities by reaching out to any \
        staff in the IR office. You can also submit anonymous suggestions and general feedback using the brief, online Feedback Form.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:22
    },
    {
        //what counts as an educational record
        str: 'An educational record is any official and confidential document/record related to a student.  It can be in any form of media \
        (paper or electronic).  It can include the following, but is not limited to: grades, transcripts, class lists, student course schedules, \
        financial information, discipline files, information about difficulties in a class or at school if in a record, social security number, \
        and anything with a student ID number.  The following are NOT educational records: personal notes (e.g. faculty member’s private notes), \
        law enforcement or campus security records, health records, or employment and payroll information.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:23
    },
    {
        //what counts as a school official
        str: 'A person employed by the school in an administrative, supervisory, academic, research, support staff position, person serving \
        on the Board of Regents, a student serving on an official committee (such as a grievance or disciplinary committee), or a volunteer \
        or outside contractor under certain circumstances.',
        choices:['Do you have any other questions?'],
        indices:[0] ,
        index:24
    },
    {
        //what counts as a legitimate educational interest
        str: 'A legitimate educational interest is defined as the need to review an education record in order to fulfill the school \
        official’s professional responsibilities for the school.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:25
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
        indices:[0],
        index:26
    },
    {
        //FERPA standards and individual data
        str: 'If the IR Office agrees that the data request for individual level data is considered appropriate given FERPA regulations, \
        it is usually necessary for the data requestor to provide student identifiers (e.g. Banner ID numbers) to facilitate the IR office \
        accessing individual level data.  Failure to provide an identifier increases the complexity of the data request, imposes a significant \
        resource burden on the IR office to access and clean the data, and lengthens the turnaround to respond to a data request.',
        choices:['Do you have any other questions?'],
        indices:[0],
        index:27
    },
    {
        //benchmarking data
        //hyperlink inside
        str: "The IR office website's list of External Resources is available at this link. The IR office's website's External Resources \
        section feature downloadable tutorials on accessing data for benchmarking. Different external resources vary in the level of data \
        detail they provide and in the customizability of choosing comparison schools. Comparing institutions using IPEDS provides the most \
        detailed benchmarking data. College Navigator provides the most commonly requested IPEDS data. IPEDS Data Feedback Reports provide \
        overview data with a pre-selected group of comparison schools.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:28
    },
    {
        //college navigator
        //hyperlink inside
        str: "The U.S. Department of Education’s National Center for Education Statistics (NCES) maintains this online data repository. \
        It provides commonly requested IPEDS data such as graduation rate in an easily accessible site to the public. See the additional \
        FAQs for a list of what kind of data is available and how to use this data source for benchmarking. This website is available at this \
        link and is also listed in the IR website's External Resources.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:29
    },
    {
        str:['Do you have any other questions?'], 
        index: 30      
    },
    {
        str: 'What do you want to know about FERPA?',
        choices: ['What is FERPA and how does it apply?', 'I would like to know more about FERPA standards and individual data.'],
        indices:[26,27] ,
        index:31
    },
    {
        //what is data governance and why is it important
        str: "Data governance is both an organizational process and a structure; it establishes responsibility for data, organizing program \
        area staff to collaboratively and continuously improve data quality through the systematic creation and enforcement of policies, roles, \
        responsibilities, and procedures (National Forum on Education Statistics, 2011). Essentially, the ambitious charge for stakeholders involved \
        in data governance is to develop and support data practices that promote institutional mission fulfillment, support informed decisions, \
        and facilitate strategic planning.  Ensuring a solid data foundation obliges the collaborative work of leaders and experts across campus \
        attending to what falls under the data governance umbrella: data definitions, process ownership and authority, accountability, security and \
        privacy, data access, reporting needs and requirements, and research priorities. A culture of data informed decision-making requires that the university’s \
        data infrastructure be sound and that campus stakeholders are empowered with timely and accurate data.  A continuous investment of \
        collective time and resources is necessary to meet today’s extensive demand for informed and nimble decision-making across the university. \
        As an advocate for robust data governance, the Office of Institutional Research at UP hopes to broadly empower the wise use of data by all \
        stakeholders involved in achieving the institutional mission. As increasing numbers of data consumers collect and access data, this diffuse \
        network has the potential to expedite data informed decision-making at the significant risk of creating redundant data silos.  Data governance \
        encompasses both the top-down and grassroots strategies that establish effective university-wide data practices. The work is not simple, however \
        the increase in trust and consistency in the data pays dividends.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:32
    },
    {
        //what is IPEDS
        str: "From the NCES website: IPEDS is the Integrated Postsecondary Education Data System. It is a system of multiple surveys conducted annually \
        by the U.S. Department of Education’s National Center for Education Statistics (NCES). IPEDS gathers information from every college, university, \
        and technical and vocational institution that participates in the federal student financial aid programs. The Higher Education Act of 1965, as amended, \
        requires that institutions that participate in federal student aid programs report data on enrollments, program completions, graduation rates, faculty \
        and staff, finances, institutional prices, and student financial aid. These data are made available to students and parents through the College Navigator \
        college search Web site and to researchers and others through the IPEDS Data Center. The wealth of data available via IPEDS makes it a valuable resource for internal and external stakeholders interested in better understanding and benchmarking postsecondary education institutions.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index: 33
    },
    {
        //using college nav to get IPEDS data
        //hyperlink inside
        str: "The website lets you enter the name of a specific school or use search options (e.g. enrollment, institution type, admissions selectivity, religious \
            affiliation) to build a list of schools using specific criteria. Clicking on the name of an individual institution takes you to the most recent IPEDS data \
            for the school on tuition, financial aid, enrollment, student demographics, admissions, retention rate, graduation rate, lists of programs/majors offered, \
            service members, varsity athletic teams, accreditations, campus security, and loan default rates. This website is available at this link and is also listed \
            in the IR website's External Resources.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index: 34
    },
    {
        //what is IPEDS data feedback report
        //hyperlink
        str: "Every fall, a new Data Feedback Report (DFR) is created and compares UP’s data with a group of peer comparison institutions.  This important benchmarking \
        document is publicly available.  UP’s DFRs are available in the DFR Archives at this link.  The DFR contains brief data overview of various topics such as enrollment, \
        degrees, financial aid, retention, graduation, finance, faculty/staff, and libraries.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:35
    },//NOTE: IPEDS ON THE DECISION TREE NEEDS TO BE EXPANDED TO LIST OUT THESE QUESTIONS BECAUSE WE WON'T BE ABLE TO FIT THESE ANSWERS ALL ON ONE SCREEN EASILY
    {
        //data definitions
        //hyperlink inside
        str: "Data definitions can be found by navigating to the Supporting Documents for the Tableau Dashboards or by reading the Data Definitions page. The Institutional \
        Research Pilots portal space is the intended future space that will host fuller data dictionary documentation. The link will be available via the Data Governance Resources website.",
        choices:['Do you have any other questions?'], 
        indices:[0], 
        index:36     
    },
    {
        //data governance priorities
        //hyperlink inside
        str: "The large group of stakeholders involved in data governance are constantly pursuing multiple, long-term and short-term projects to improve the data infrastructure \
        of the university.  Some of the latest priorities and projects are listed on the data governance site. ",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:37
    },//NEEDS TO BE ADDED TO DECISION TREE IN DATA GOVERNANCE
    {
        //making time for data related tasks
        //hyperlink inside
        str:"The work that any UP employee conducts on data-related tasks can be time-consuming.  However, it's important to document data processes and definitions. \
        The work is complex and helps offices be prepared to for changes over time.  The IR Office plans to regularly host Data Retreats as a way for any UP employee to \
        have uninterrupted time and a supportive space to build more efficient data tools that directly assist the office and connect/brainstorm with other offices.  See the \
        Data Retreat site for more details! ",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:38
    },//NEEDS TO BE ADDED TO DECISION TREE IN DATA GOVERNANCE
    {
        //what is IRB
        //hyperlink inside
        str:"The Institutional Review Board (IRB) is the body at the University of Portland that is charged with review and oversight of research and classroom projects \
        involving human subjects carried out by members of the University community. The principal function of the IRB is to safeguard the rights and welfare of participants \
        in research activities originating in the University. The IRB exercises oversight and review of research initiated by faculty, staff members, and students in connection \
        with their respective academic pursuits. More information is available at the IRB website.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index: 39
    },//NEEDS TO BE ADDED TO DECISION TREE IN DATA PROTECTION 
    {
        //find basic student data of most recent fall semester
        //hyperlink inside
        str: "As the IR Office transitions from the old website to the upgraded website, some features are being maintained yet continually improved. The At a Glance page \
        compiles tables that used to reside on multiple pages. This includes undergraduate and graduate student enrollment and admissions data.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:40
    },
    {
        //how many student were enrolled during a certain period of time
        //hyperlinks inside
        str:"View the Enrollment Dashboard. The dashboard is powered by Tableau software, which means the data is available all the time, updated regularly and directly from Banner, and is interactive. View the Tableau dashboard site to get oriented and access supporting documentation. IPEDS can be used to find data on other schools. Please see the External Resources FAQ for information on IPEDS and College Navigator.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:41
    },
    {
        //how many majors were enrolled during a certain period of time
        //hyperlinks inside
        str:"View the Enrollment Dashboard. The dashboard is powered by Tableau software, which means the data is available all the time, updated regularly and directly from Banner, and is interactive. The MajorsUnduplicated and MajorsDuplicated tabs correspond to headcounts of primary majors only and headcounts of multiple majors and degrees, respectively.  In other words, use the unduplicated headcount for reports that need to match the total enrollment for the university.  Use the duplicated headcount for departmental reports that need the total headcount of a given major. View the Tableau dashboard site to get oriented and access supporting documentation. IPEDS can be used to find data on other schools. Please see the External Resources FAQ for information on IPEDS and College Navigator.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:42
    },
    {
      //can I see a breakdown of ethnicity
      //hyperlink inside
      str:"Please see the FAQ for What data can I find in the Common Data Set?", 
      choices:['Do you have any other questions?'], 
      indices:[0],
      index: 43
    },
    {
        //what was the retention rate for a given cohort
        //hyperlinks inside
        str:"View the Retention Dashboard. The dashboard is powered by Tableau software, which means the data is available all the time, updated regularly and directly from Banner, and is interactive. View the Tableau dashboard site to get oriented and access supporting documentation. IPEDS can be used to find data on other schools. Please see the External Resources FAQ for information on IPEDS and College Navigator.",
        choices:['Do you have any other questions?'], 
        indices:[0],
        index: 44
    },
    {
        //what was the grad rate for a given cohort
        //hyperlinks inside
        str:"View the Graduation Dashboard. The dashboard is powered by Tableau software, which means the data is available all the time, updated regularly and directly from Banner, and is interactive. View the Tableau dashboard site to get oriented and access supporting documentation. IPEDS can be used to find data on other schools. Please see the External Resources FAQ for information on IPEDS and College Navigator.",
        choices:['Do you have any other questions?'], 
        indices:[0],
        index:45
    },
    {
        //how do I get data
        //hyperlink inside
        str:"There are multiple ways to access data! The most immediate access for a wide variety of data is through the Office of Institutional Research's website. One of the best ways to navigate the site is to scan through the FAQs to find your question, which will direct you to a location with a relevant answer.  Most questions are covered by the link to Institutional Data.  Second, there are repositories of data that reside externally (e.g. IPEDS, US News & World Report rankings, etc). Please see the link for External Resources to access that information. Third, if the data you are seeking is at the individual student level, please see the FAQs regarding Protecting Data. Lastly, if your data request is not covered, Submit a Data Request.",
        choices:['Do you have any other questions?'],
        indices:[0],
        index:46
        
    },//NEEDS TO BE ADDED TO DATA REQUESTS TREE 
    
    {
        str: 'Would you like to request data?',
        choices: ['I am a student','I am faculty/staff at University of Portland','I am a member of the general public', 'How soon can I hear back','I would like to email a data request','How do I contact IR with a specific request?'],
        indices:[16,17,18,19,21,20],
        index: 47
    }
    

]
 // dictionary of keywords to use for context-based model
var keyWords = ["when", "what", "how", "about", "counts", "cds", "data", "faculty", "staff", "student", "general", "public", "contact", "request", "suggest", 
"access", "report", "ir",  "ferpa", "ipeds", "tableau", "dashboard", "grant", "proposals", "email", "navigator", "benchmarking", "governance", 
"priorities", "definitions", "time", "individual", "standard", "educational", "records", "school", "official", "interests", "legitimate", "soon"];

// this map is set in the order of the answers provided in meeting notes
const map = new Map();
map.set('0100011000000000000000000000000000000000', 14);
map.set('0001001001000000000000000000000000000000', 40);
map.set('0001001000000100000000000000000000000000', 16);
map.set('0000001000000010000000000000000000000000', 15);
map.set('0001000000000000000001000000000000000000', 13);
map.set('0000000000000001000001000000000000000000', 13);
map.set('0000000000000001100000110000000000000000', 12);
map.set('0000001001000100000000000000000000000000', 16);
map.set('0000001110000100000000000000000000000000', 17);
map.set('0001001000110100000000000000000000000000', 18);
map.set('0010000000000000000000000000000000000001', 19);
map.set('0000001000000100000000001000000000000000', 21);
map.set('0010000000001100010000000000000000000000', 20);
map.set('0001000000000000000100000000000000000000', 33);
map.set('0001000000000000000000000100000000000000', 34);
map.set('0001001000000000000000000010000000000000', 28);
map.set('0001000000001000010000000000000000000000', 9);
map.set('0001000000000000010000000000000000000000', 10);
map.set('0100001000000000000000000001000000000000', 32);
map.set('0100001000000000000000000000010000000000', 36);
map.set('0001001000000000000000000001100000000000', 37);
map.set('0010001000000000010000000000001000000000', 38);
map.set('0110000000000000001000000000000000000000', 26);
map.set('0001001000000000001000000000000110000000', 27);
map.set('0100100000000000000000000000000001000000', 23);
map.set('0100100000000000000000000000000000011000', 24);
map.set('0100100000000000000000000000000001000010', 25);

function choice1Handler(answerIndex,previousQuestionIndex){

    newIndex = 0
    
    console.log("Parameters: " +answerIndex +" " + previousQuestionIndex);
    
    question = questions[previousQuestionIndex];
    newIndex = question["indices"][answerIndex];
    
    if (newIndex <= 0){
        return questions[0];
    }
    else{
        return questions[newIndex];
    }
}


function contextHandler(str) {
    var string = str.toLowerCase();
    const question = string.split(" ");
    var bitwise = '';
    var bit = 0;
    for(let i = 0; i < keyWords.length; i++) {
        for(let j = 0; j < question.length; j++) {
            if(question[j].startsWith(keyWords[i])) {
                bit = 1;
            }
        }

        bitwise = bitwise.concat(bit);
        bit = 0;
    }
    console.log(bitwise);

    if(map.has(bitwise)) {
        let n = map.get(bitwise);
        newAnswer = questions[n];
        let newIndex = newAnswer["index"];
        return questions[newIndex];
    }
    else {
        return questions[0];
    }
}
