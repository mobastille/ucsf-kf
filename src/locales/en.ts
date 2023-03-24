/* eslint-disable max-len */
import translations from './en.json';

const filesFacets = {
  data_category: 'Data Category',
  data_access: 'Data Access',
  data_type: 'Data Type',
  file_format: 'File Format',
  size: 'Size',
  access: 'Access',
  controlled_access: 'Access',
  sequencing_experiment: {
    experiment_strategy: 'Experimental Strategy',
  },
  is_harmonized: 'Harmonized Data',
  acl: 'ACL',
};

const en = {
  ...translations,
  date: {
    yearsDaysFormat:
      '{years, plural, =0 {} =1 {# <span style="font-size: 12px">year</span>} other {# <span style="font-size: 12px">years</span>}} {days, plural, =0 {} =1 {# <span style="font-size: 12px">day</span>} other {# <span style="font-size: 12px">days</span>}}',
  },
  global: {
    yes: 'Yes',
    no: 'No',
    connect: 'Connect',
    close: 'Close',
    search: {
      genes: {
        emptyText: 'No gene found',
        placeholder: 'e.g. BRAF, ENSG00000157764',
        title: 'Search by gene',
        tooltip: 'Enter a Gene Symbol, Gene Alias ​​or Ensemble ID',
      },
      variants: {
        emptyText: 'No variant found',
        placeholder: 'e.g. 10-100063679-C-T, rs341',
        title: 'Search by variant',
        tooltip:
          'Enter Variant Locus, Gene Symbol, Gene Alias, Gene AA Change, dbSNP ID, Clinvar ID, Ensembl ID, refseq ID',
      },
      study: {
        emptyText: 'No study found',
        placeholder: 'e.g. KF DSD, Neuroblastoma',
        title: 'Search by study',
        tooltip: 'Search by Study Code, Study Name, dbGaP Accession Number',
      },
    },
    filters: {
      actions: {
        all: 'All',
        none: 'None',
        clear: 'Clear',
        less: 'Less',
        more: 'More',
        apply: 'Apply',
        dictionary: 'Dictionary',
      },
      operators: {
        between: 'Between',
        lessthan: 'Less than',
        lessthanorequal: 'Less than or equal',
        greaterthan: 'Greater than',
        greaterthanorequal: 'Greater than or equal',
      },
      range: {
        is: 'Is',
      },
      messages: {
        empty: 'No values found',
      },
      checkbox: {
        placeholder: 'Search...',
      },
    },
    forms: {
      errors: {
        minCharacters: 'characters minimum',
        requiredField: 'This field is required',
        enterValidEmail: 'Enter a valid email',
      },
    },
    errors: {
      403: 'Sorry, you are not authorized to access this page.',
      404: 'Sorry, the page you visited does not exist.',
      500: 'Sorry, something went wrong.',
      backHome: 'Back home',
    },
    notification: {
      genericError: 'An error occured',
    },
    proTable: {
      results: 'Results',
      noResults: 'No Results',
      of: 'of',
      selected: 'item selected',
      selectedPlural: 'items selected',
      pagination: {
        first: 'First',
        previous: 'Prev.',
        next: 'Next',
        view: '{value} / view',
      },
    },
  },
  maintenance: {
    title: 'We are currently down for maintenance',
    subtitle:
      'We apologize for any inconvenience and appreciate your understanding while we work to bring the portal back online.',
  },
  api: {
    savedFilter: {
      error: {
        title: 'Error',
        messageUpdate: 'Unable to update filter',
        messageDelete: 'Unable to delete filter',
      },
    },
    savedSet: {
      error: {
        title: 'Error',
        messageUpdate: 'Unable to update set',
        messageDelete: 'Unable to delete set',
        messageCreate: 'Unable to create set',
      },
      success: {
        titleCreate: 'Your set has been saved.',
        messageCreate: 'You can add your sets to a query from the sidebar or the dashboard.',
        titleUpdate: 'Success',
        messageUpdate: 'Your set has been updated.',
      },
    },
    cavatica: {
      error: {
        title: 'Error',
        projects: {
          fetch: 'Unable to fetch your cavatica projects.',
          create: 'Unable to create your cavatica project.',
        },
        billingGroups: {
          fetch: 'Unable to fetch your cavatica billing groups.',
        },
        bulk: {
          import: 'Unable to copy files to your project',
          fetchFiles: 'Unable to fetch selected files',
        },
        fileAuth: {
          title: 'Unauthorized files',
          description:
            'You are not authorized to analyze the files you have selected. Learn more about data access.',
        },
      },
      success: {
        title: 'Success',
        projects: {
          create: 'Project created successfully',
        },
        bulk: {
          import: {
            copySuccess: 'Your files have been copied to: <strong>{destination}</strong>',
            possibleDelays:
              'If you have uploaded more than 10000 files in the last 5 minutes, the import may take a little longer.',
            openProject: 'Open project in Cavatica',
          },
        },
      },
    },
    report: {
      error: {
        title: 'Error',
        message: 'We were unable to generate the report at this time. Please try again later or ',
        support: 'contact support',
      },
      inProgress: {
        title: 'Processing',
        fetchReport: 'Fetching Report, please wait',
      },
      onSuccess: {
        title: 'Success',
        fetchReport: 'Report downloaded successfully',
      },
    },
    noData: 'No data',
  },
  components: {
    filterList: {
      collapseAll: 'Collapse all',
      expandAll: 'Expand all',
    },
    table: {
      itemCount: {
        singlePage: '{count, plural, =0 {No result} other {<strong>#</strong> results}}',
        multiplePages:
          'Results <strong>{from}</strong> - <strong>{to}</strong> of <strong>{total}</strong>',
      },
    },
    suggester: {
      error: {
        title: 'Error',
        description: 'An error occurred while fetching suggestions',
      },
      noResultsFound: 'No results found',
    },
    querybuilder: {
      defaultTitle: 'Untitled Filter',
      header: {
        modal: {
          edit: {
            title: 'Edit filter',
            okText: 'Save',
            cancelText: 'Cancel',
            input: {
              label: 'Filter name',
              placeholder: 'Untitled filter',
              maximumLength: 'characters maximum',
            },
          },
          confirmUnsaved: {
            title: 'Unsaved changes',
            openSavedFilter: {
              okText: 'Continue',
              cancelText: 'Cancel',
              content: 'You are about to open a saved filter; all modifications will be lost.',
            },
            createNewFilter: {
              okText: 'Create',
              cancelText: 'Cancel',
              content: 'You are about to create a new filter; all modifications will be lost.',
            },
          },
        },
        popupConfirm: {
          delete: {
            title: 'Permanently delete this filter?',
            okText: 'Delete filter',
            cancelText: 'Cancel',
            content: 'You are about to permanently delete this filter and all of its queries.',
          },
        },
        tooltips: {
          newQueryBuilder: 'New filter',
          save: 'Save filter',
          saveChanges: 'Save changes',
          delete: 'Delete',
          duplicateQueryBuilder: 'Duplicate filter',
          share: 'Share (Copy url)',
          setAsDefaultFilter: 'Set as default filter',
          unsetDefaultFilter: 'Unset default filter',
          undoChanges: 'Discard unsaved changes',
          noSavedFilters: 'You have no saved filters',
        },
        myFiltersDropdown: {
          title: 'My Filters',
          manageMyFilter: 'Manage filters',
        },
        duplicateFilterTitleSuffix: 'COPY',
      },
      query: {
        combine: {
          and: 'and',
          or: 'or',
        },
        noQuery: 'Use the search tools & facets on the left to build a query',
      },
      actions: {
        new: 'New',
        changeOperatorTo: 'Change operator to',
        addQuery: 'New query',
        combine: 'Combine',
        labels: 'Labels',
        delete: {
          title: 'Delete this query?',
          titleSelected: 'Delete this query?',
          cancel: 'Cancel',
          confirm: 'Delete',
        },
        clear: {
          title: 'Delete all queries?',
          cancel: 'Cancel',
          confirm: 'Delete',
          buttonTitle: 'Clear all',
          description: 'You are about to delete all your queries. They will be lost forever.',
        },
      },
    },
    savedSets: {
      modal: {
        edit: {
          title: 'Edit set',
          okText: 'Save',
          label: '{type} set',
          cancelText: 'Cancel',
          input: {
            label: 'Set name',
            placeholder: 'Untitled Set',
            maximumLength: 'characters maximum',
          },
        },
        add: {
          title: 'Add to a {type} set',
          okText: 'Add to set',
          name: 'Set name',
          cancelText: 'Cancel',
        },
        remove: {
          title: 'Remove from a {type} set',
          okText: 'Remove from set',
          cancelText: 'Cancel',
        },
      },
      popupConfirm: {
        delete: {
          title: 'Permanently delete this set?',
          okText: 'Delete set',
          cancelText: 'Cancel',
          content: 'You are about to permanently delete this set.',
        },
      },
    },
    dataRelease: {
      studies: 'Studies',
      participants: 'Participants',
      biospecimens: 'Biospecimens',
      families: 'Families',
      storage: 'Storage',
      files: 'Data Files',
    },
    uploadIds: {
      modal: {
        title: 'Upload a {entity} list',
        submittedColTitle: 'Submitted {entity} identifiers',
        uploadBtnText: 'Upload a {entity} list',
        mappedTo: 'Mapped To',
        collapseTitle: 'Summary Table  ({matchCount} matched, {unMatchCount} unmatched)',
        inputLabel: 'Copy-paste a list of identifiers or upload a file',
        match: 'Matched ({count})',
        unmatch: 'Unmatched ({count})',
        tableMessage:
          '{submittedCount} submitted identifiers mapped to {mappedCount} unique system identifiers',
        matchTable: {
          idcol: '{entity} ID',
          participant: {
            matchcol: 'Participant ID',
            mappedcol: 'Study ID',
          },
          file: {
            matchcol: 'File ID',
            mappedcol: 'Study ID',
          },
          biospecimen: {
            matchcol: 'Sample ID',
            mappedcol: 'Study ID',
          },
        },
        pillTitle: 'Uploaded List',
        upload: {
          fileBtn: 'Upload a file',
          btn: 'Upload',
        },
        clearBtn: 'Clear',
        cancelBtn: 'Cancel',
        emptyTable: 'No data',
        popover: {
          title: 'Identifiers and File Formats',
          identifiers: 'Identifiers',
          separatedBy: {
            title: 'Separated by',
            values: 'comma, space, new line',
          },
          fileFormats: '.txt, .csv, .tsv',
          uploadFileFormats: 'Upload file formats',
        },
      },
    },
  },
  layout: {
    main: {
      menu: {
        dashboard: 'Dashboard',
        studies: 'Studies',
        explore: 'Data Exploration',
        variants: 'Variants',
        participants: 'Participants',
        biospecimen: 'Biospecimen',
        datafiles: 'Data Files',
        website: 'Website',
        documentation: 'Documentation',
        forum: 'Forum',
        help: 'Help',
        community: 'Community',
        contact: 'Contact',
      },
    },
    user: {
      menu: {
        myprofile: 'My Profile',
        settings: 'Settings',
        logout: 'Logout',
      },
    },
  },
  screen: {
    participantEntity: {
      proband: 'Proband',
      familyMember: 'Family Member',
      downloadData: 'Download clinical data',
      summaryHeader: {
        studies: '{count, plural, =0 {Study} =1 {Study} other {Studies}}',
        files: '{count, plural, =0 {File} =1 {File} other {Files}}',
      },
      summary: {
        title: 'Summary',
        id: 'ID',
        externalId: 'Ext. Participant ID',
        study: 'Study',
        dbGaP: 'dbGaP',
        pedcBioPortal: 'PedcBioPortal',
        diagnosisCategory: 'Diagnosis Category',
        familyComposition: 'Family Composition',
        proband: 'Proband',
        vitalStatus: 'Vital Status',
      },
      profile: {
        title: 'Profile',
        race: 'Race',
        ethnicity: 'Ethnicity',
        sex: 'Sex',
        vitalStatus: 'Vital Status',
        deceased_date: 'Age at death',
      },
      family: {
        title: 'Family',
        id: 'Participant ID',
        affectedStatus: 'Affected Status',
        relationship: 'Family Relationship',
      },
      diagnosis: {
        title: 'Diagnosis',
        age: {
          title: 'Age',
          tooltip: 'Age at Diagnosis',
        },
        category: 'Diagnosis Category',
        sourceText: 'Diagnosis (Source Text)',
        sharedTerm: 'MONDO Shared Term',
        sharedTermTooltip: '# of participants with this exact MONDO term',
        ncit: 'Diagnosis (NCIT)',
        mondo: 'Diagnosis (MONDO)',
      },
      phenotype: {
        title: 'Phenotype',
        hpoPhenotypeObserved: 'Phenotype (HPO)',
        sourceText: 'Phenotype (Source Text)',
        age: {
          title: 'Age',
          tooltip: 'Age at Phenotype',
        },
        interpretation: 'Interpretation',
        sharedTerm: 'HPO Term',
      },
      biospecimen: {
        title: 'Biospecimen',
      },
      files: {
        title: 'Data Files',
        files: 'Files',
        dataFile: 'Data Files',
        dataType: 'Data Type',
        numberByDataTypes: 'File counts by Data Type',
        numberByDataTypesTooltip: 'Total number of files associated with the participant',
        totalNumberOfFiles: '(n={count})',
        numberByExperimentalStrategy: 'File counts by Experimental Strategy',
        sequencing_experiment: {
          experimental_strategy: 'Experimental Strategy',
          type_of_sequencing: 'Sequencing Type',
          read_length: 'Read Length',
          platform: 'Platform',
          capture_kit: 'Capture Kit',
          sequencer_id: 'Sequencer',
          run_date: 'Date (yyyy-mm-dd)',
          run_name: 'Run',
          labAliquotID: 'Aliquot',
          bio_informatic_analysis: 'ID',
          workflow_name: 'Pipeline',
          workflow_version: 'Version',
          genome_build: 'Genome Build',
          analysis_id: 'Analysis ID',
        },
      },
    },
    memberProfile: {
      notFound: 'User not found',
      rolesTitle: 'Role',
      noRoles: 'No roles',
      interests: 'Area of interest',
      noUsage: 'No intended usages',
      editProfileBtn: 'Edit Profile',
      communityBtn: 'Community',
      privateAlert:
        'Your profile is currently hidden from community members. You can make it public in the ',
      settingsPage: 'settings page',
    },
    loginPage: {
      title: 'UCSF Data Resource Portal',
      datarelease: {
        title: 'Available Data',
      },
      accelerating:
        'Accelerating UCSF research and promoting discoveries of new health insights underlying precision medicine, to improve patient and health care.',
      accessLargeScale:
        'Access large-scale data resources and explore custom built cohort datasets based on participant, biospecimen, clinical and omics data.',
      login: 'Login',
      signup: 'Sign up',
    },
    dashboard: {
      hello: 'Hello',
      links: {
        studies: 'Studies',
        participants: 'Participants',
        biospecimens: 'Biospecimens',
        datafiles: 'Data Files',
        variantSearch: 'Variant Search',
      },
      cards: {
        error: {
          title: 'Connection error',
          subtitle:
            'We are currently unable to connect to this service. Please refresh the page and try again. If the problem persists, please',
          contactSupport: 'contact support',
        },
        datarelease: {
          title: 'Data release {version}',
        },
        authorizedStudies: {
          title: 'Authorized Studies {count, plural, =0 {} other {(#)}}',
          connectedNotice:
            'You have access to the following UCSF controlled data through your NIH credentials.',
          disconnectedNotice:
            'Access controlled-access data by connecting your account using your NIH Credentials',
          disconnect: 'Disconnect',
          noAvailableStudies: 'No available studies',
          authorization: 'Authorization',
          of: 'of',
          files: 'Files',
          dataGroups: 'Data use groups: {groups}',
          modal: {
            title: 'Manage Connections',
            description:
              'Access select NCI and UCSF controlled access data by connecting your account using your NIH login credentials. Please remember that it is your responsibility to follow any data use limitations with controlled access data.',
          },
          notification: {
            message: 'Error Connecting',
            description:
              'An error occurred while connecting to the data repository. Please, try again or contact our support.',
          },
          infoPopover: {
            title: 'Accessing Data',
            content:
              'Users requesting access to controlled data are required to have an eRA Commons account. Read more on',
            applyingForDataAccess: 'applying for data access',
          },
        },
        cavatica: {
          title: 'Cavatica Projects',
          connectedNotice: 'You are connected to the Cavatica cloud environment.',
          disconnectedNotice: 'To analyze UCSF data on the cloud, connect to Cavatica.',
          disconnect: 'Disconnect',
          noProjects: 'You do not have any Cavatica projects.',
          createNewProject: 'Create your first project',
          membersCount: '{count, plural, =0 {member} =1 {# member} other {# members}}',
          infoPopover: {
            title: 'CAVATICA Compute Cloud Platform',
            content:
              'CAVATICA is a cloud-based data analysis platform where data, results, and workflows are shared among the world’s research community.',
            readMore: 'Read more',
          },
          newProject: 'New project',
        },
        savedFilters: {
          title: 'Saved Filters',
          noSavedFilters: 'You have no saved filters',
          lastSaved: 'Last saved: {date} ago',
          infoPopover: {
            content:
              'A saved filter is a virtual query created by applying one or more filters to a search query. They can be saved and revisited for later use without having to manually reselect filters in the sidebar. You can create saved filters using the Query Management tool above the table of results in the',
            title: 'Managing Saved Filters',
          },
        },
        savedSets: {
          errorCard: {
            contactSupport: 'contact our support',
            failedToFetch: 'Failed to fetch Saved Sets',
            refresh: 'Please refresh and try again or',
          },
          tabs: {
            biospecimens: 'Biospecimens',
            files: 'Files',
            participants: 'Participants',
            variants: 'Variants',
          },
          title: 'Saved Sets',
          noSavedFilters: 'You have no saved sets',
          lastSaved: 'Last saved: {date} ago',
          infoPopover: {
            content:
              'A saved set is a set of one or more entity IDs that can be saved and revisited for later use without having to manually reselect entity IDs. You can create Participant and File saved sets at the top of the table of results in the',
            title: 'Managing Saved Sets',
          },
        },
        notebook: {
          title: 'Variant Workbench',
          account: 'Account Settings',
          firstConnectError:
            'In order to lauch your notebook, you must first connect to your data repositories in your',
          description:
            'Connect to our data respository partners in order to access the UCSF variant database in your own <b>high performance compute environment</b>.',
          contactSupport:
            'We were unable to complete this operation. <a href="mailto:support@kidsfirstdrc.org">Contact support</a> if the issue persists',
          tryAgain: 'Try Again',
          notAllowed: 'Currently available for UCSF investigators only.',
          wait: 'This process may take up to 10 minutes. You can safely navigate away from this page.',
          open: 'Open notebooks',
          launch: 'Launch environment',
        },
        fhirDataResource: {
          title: 'UCSF FHIR API',
          infoPopover: {
            title: 'Query KF Data via FHIR API',
            content:
              'The HL7® FHIR® format defines how clinical health data for research can be made interoperable across different computer systems via an API regardless of how it is stored in those systems. The NIH encourages biomedical investigators to use the FHIR standard to support exchange of data between NCPI’s participating platforms.',
            readMore: 'Read more',
          },
          caringApi: {
            title: '<i>CARING</i> Data FHIR API Endpoint',
            description: 'Query the entire CARING dataset via FHIR API parameters',
            popoverText:
              "FHIR & Data Resources for NIH's Collaboration to Assess Risk and Identify LoNG-term outcomes for Children with COVID",
          },
          kfApi: {
            title: 'UCSF FHIR API Endpoint',
            description: 'Query all released UCSF datasets via FHIR API',
          },
          dashboardApi: {
            title: 'UCSF FHIR Data Dashboard',
            description: 'Explore the CARING data via dashboard interfaces',
          },
          documentation: {
            title: 'UCSF FHIR Documentation',
            description: 'Swagger documentation to learn how to interact with the FHIR API',
          },
        },
      },
    },
    community: {
      title: 'UCSF Community',
      resultsMember: 'Members',
      noResults: 'No members',
      search: {
        filters: 'Filters',
        selectPlaceholder: 'Select',
        role: 'Member Role',
        interests: 'Area of interest',
        clearFilters: 'Clear filters',
        barPlaceholder: 'Search by member name or affiliation',
        sorter: {
          newest: 'Newest first',
          oldest: 'Oldest first',
          lastnameAlpha: 'Alphabetical (last name)',
        },
      },
    },
    profileSettings: {
      title: 'Profile settings',
      viewProfile: 'View profile',
      toggleProfileVisibility: {
        title: 'Public Profile',
        tooltip:
          'When your profile is public, other members can see information about you that includes your name, role, affiliation, and research interest.',
      },
      cards: {
        deleteAccount: {
          title: 'Delete Account',
          button: 'Delete my account',
          notice:
            'You will no longer be able to sign into the UCSF data portal. All of your saved sets and queries will be lost. You can create a new account at any time.',
          confirm: {
            content: 'Are you sure you want to permanently delete this account?',
          },
        },
        identification: {
          title: 'Identification',
          alert:
            'You are authenticated with <strong>{provider}</strong> using <strong>{email}</strong>. This {id} is never shown to the public and cannot be changed.',
          firstName: 'First name',
          yourFirstName: 'Your First Name',
          lastName: 'Last name',
          yourLastName: 'Your Last Name',
          website: 'Website',
          editPhotoModalTitle: 'Edit photo',
          uploadImageError: 'Unable to upload your image at the moment',
          removePhotoModalTitle: 'Remove profile photo?',
          removePhotoModalButton: 'Yes remove photo',
          removePhotoModalMessage:
            'Are you sure you want to remove your photo? We will replace it with a default avatar.',
          uploadPhotoButton: 'Upload photo',
          removePhotoButton: 'Remove photo',
        },
        roleAffiliation: {
          title: 'Role & Affiliation',
          role: 'Role',
          checkAllThatApply: 'Check all that apply',
          institution: 'Institution or organization',
          institutionalEmail: 'Institutional email address',
          institutionalEmailTooltip:
            'This email will be displayed on your profile page and accessible to all logged-in users of the portal.',
        },
        location: {
          title: 'Location',
          adressLine1: 'Adress Line 1',
          adressLine2: 'Adress Line 2',
          city: 'City',
          state: 'State or province',
          country: 'Country',
          zip: 'Zip',
        },
        researchInterests: {
          title: 'Research Interest',
          interests: 'Area of interest',
        },
        saveChanges: 'Save changes',
        discardChanges: 'Discard changes',
      },
    },
    variants: {
      sidemenu: {
        participant: 'Participant',
        variant: 'Variant',
        gene: 'Gene',
        frequency: 'Frequency',
        pathogenicity: 'Pathogenicity',
      },
      title: 'Variants Exploration',
      table: {
        consequences: {
          title: 'Consequences',
          tooltip: 'Functional consequences of genetic variations annotated using VEP',
        },
        clinvar: 'ClinVar',
        gnomAD: {
          title: 'gnomAD',
          tooltip: 'gnomAD 3.1.1 Allele Frequency',
        },
        type: 'Type',
        variant_class: 'Variant class',
        variant_id: 'Variant ID',
        gnomAd: 'GnomAD',
        genome_build: 'Genome build',
        dbsnp: 'dbSNP',
        variant: 'Variant',
        homozygotes: {
          title: 'Homo.',
          tooltip: '# of Homozygotes',
        },
        alt: {
          title: 'ALT',
          tooltip: '# of Alternative alleles',
        },
        frequence: {
          title: 'Freq.',
          tooltip: 'Frequency of the variant across UCSF cohorts',
        },
        participant: {
          title: 'Part.',
          tooltip: '# of affected participants across UCSF cohorts',
        },
      },
      summary: {
        summary: 'Summary',
        variant: 'Variant',
        type: 'Type',
        cytoband: 'Cytoband',
        referenceGenome: 'Reference Genome',
        studies: 'Studies',
        participants: 'Participants',
        participantsTooltip:
          'Due to participant confidentiality, redirect to the Data Exploration page if the number of affected participants across UCSF cohorts ≥ 10',
        genes: 'Genes',
        omim: 'OMIM',
        clinVar: 'ClinVar',
        gnomadGenome311: 'gnomAD Genome (v3.1.1)',
        dbSNP: 'dbSNP',
      },
      consequences: {
        consequence: 'Consequence',
        impactTag: {
          modifier: 'MODIFIER',
          low: 'LOW',
          moderate: 'MODERATE',
          high: 'HIGH',
        },
        aaColumn: 'AA',
        aaColumnTooltip: 'Amino acid substitution',
        cdnaChangeColumn: 'Coding DNA',
        conservationColumn: 'Conservation',
        strand: 'Strand',
        vep: 'VEP',
        predictions: {
          predictions: 'Predictions',
          sift: 'Sift',
          polyphen2: 'Polyphen2',
          fathmm: 'Fathmm',
          cadd: 'Cadd',
          dann: 'Dann',
          lrt: 'Lrt',
          revel: 'Revel',
        },
        transcript: 'Transcript',
        refSeq: 'RefSeq',
        geneConsequence: 'Gene Consequence',
        gene: 'Gene',
        omim: 'OMIM',
        hideTranscript: 'Show less',
        showTranscript: '{count, plural, =1 {# other transcript} other {# other transcripts}}',
        canonical: 'Canonical transcript',
      },
      frequencies: {
        kfStudies: 'UCSF Studies',
        publicCohorts: 'Public Cohorts',
        studies: 'Studies',
        domain: 'Domain',
        participants: 'Participants',
        participantsTooltip: '# of affected participants across UCSF studies',
        participantsInfoIconTooltip:
          'Due to participant confidentiality, links may return a smaller number than displayed',
        frequencyTooltip: 'Frequency of the variant across UCSF studies',
        frequency: 'Frequency',
        altAlleles: 'ALT Alleles',
        altAllelesTooltip: 'Number of alternative alleles',
        homozygotes: 'Homozygotes',
        homozygotesTooltip: 'Number of homozygote variants',
        total: 'TOTAL',
        cohort: 'Cohort',
        altRef: 'Alleles (ALT + REF)',
        altRefTooltip: 'Alternative alleles + Reference alleles',
        noDataAvailable: 'No data available for this variant',
      },
      pathogenicity: {
        pathogenicity: 'Pathogenicity',
        clinVar: 'ClinVar',
        genePhenotype: 'Gene - Phenotype',
        source: 'Source',
        gene: 'Gene',
        condition: 'Condition',
        inheritance: 'Inheritance',
        inheritances: 'Inheritances',
        interpretation: 'Interpretation',
      },
    },
    studies: {
      title: 'Studies',
      search: 'Search Studies',
    },
    dataExploration: {
      title: 'Explore Data',
      sidemenu: {
        study: 'Study',
        clinical: 'Clinical',
        participant: 'Participant',
        biospecimen: 'Biospecimen',
        datafiles: 'Data File',
      },
      setsManagementDropdown: {
        newTitle: 'Save {filter} set',
        editTitle: 'Edit {filter} set',
        create: 'Save as new set',
        add: 'Add to existing set',
        remove: 'Remove from existing set',
        selected: '{count, plural, =0 {# {type}} =1 {# {type}} other {# {type}s}} selected',
      },
      hpoTree: {
        modal: {
          title: 'Observed Phenotype (HPO) Browser',
          okText: 'Apply',
        },
        searchPlaceholder: 'Search for ontology term - min 3 characters',
        emptySelection: 'Select items from the left-hand pane in order to add to your query.',
        tags: {
          exact: 'Participants with this exact term',
          all: 'Participants including descendant terms',
        },
      },
      mondoTree: {
        modal: {
          title: 'Diagnosis (MONDO) Browser',
          okText: 'Apply',
        },
        searchPlaceholder: 'Search for ontology term - min 3 characters',
        emptySelection: 'Select items from the left-hand pane in order to add to your query.',
        tags: {
          all: 'Participants including descendant terms',
        },
      },
      tabs: {
        summary: {
          title: 'Summary',
          demographic: {
            cardTitle: 'Demographics',
            sexTitle: 'Sex',
            raceTitle: 'Race',
            familyComposition: 'Family Composition',
            ethnicityTitle: 'Ethnicity',
          },
          availableData: {
            dataCategoryTitle: 'Participants by Data Category',
            dataTypeTitle: 'Participants by Data Type',
            studiesTitle: 'Participants by Study',
          },
          observed_phenotype: {
            cardTitle: 'Observed Phenotypes (HPO)',
            phenotypeTree: {
              nbParticipant: '{count} participants (including descendant terms on this path)',
              addTermToQuery: 'Add term to active query',
              currentPath: 'Current Path',
            },
            empty: 'No observed phenotypes reported for these participants',
          },
          mondo: {
            cardTitle: ' Diagnosis (MONDO)',
            phenotypeTree: {
              nbParticipant: '{count} participants (including descendant terms on this path)',
              addTermToQuery: 'Add term to active query',
              currentPath: 'Current Path',
            },
            empty: 'No diagnoses reported for these participants',
          },
          ageAtDiagnosis: {
            cardTitle: 'Age at Diagnosis',
            _0to1: 'Newborn',
            _1to5: '[1, 5]',
            _5to10: '[5, 10]',
            _10to15: '[10, 15]',
            _15to18: '[15, 18]',
            _18plus: 'Adult',
          },
          studies: {
            cardTitle: 'Studies',
          },
        },
        participants: {
          title: 'Participants ({count})',
        },
        biospecimens: {
          title: 'Biospecimens ({count})',
        },
        datafiles: {
          title: 'Data Files ({count})',
          cavatica: {
            analyseInCavatica: 'Analyze in Cavatica',
            bulkImportLimit: {
              title: 'Maximum file count exceeded',
              description:
                'You can copy a maximum of <strong>{limit} files</strong> at a time. Please select fewer files and try again.',
            },
            authWarning: {
              title: 'You are not connected to Cavatica',
              description:
                'In order to analyze your files you must first connect your Cavatica account. Once you are connected, you will be redirected back to this page.',
              connect: 'Connect',
            },
            analyseModal: {
              newProject: 'New project',
              copyFiles: 'Copy files',
              copyFilesTo: 'Copy files to...',
              createProjectToPushFileTo: 'Create a project to push your files to.',
              youAreAuthorizedToCopy: 'You are authorized to copy',
            },
          },
        },
      },
    },
    join: {
      cancel: 'Cancel',
      next: 'Next',
      back: 'Back',
      submit: 'Submit',
      disclaimers: {
        title: 'UCSF Portal Registration Process',
        description:
          'The UCSF Portal is the primary entry point to the UCSF Data Hub. The UCSF Portal enables searching, visualizing, and accessing UCSF-relevant data. Some datasets may require additional approvals (e.g., dbGaP) and terms and conditions of access and use.',
        terms: {
          title: 'UCSF Portal Terms & Conditions',
          lastUpdate: 'Last Update: {date}',
          bullets: {
            1: 'My purpose for the use of UCSF Portal data is free from discrimination on the grounds of race, ethnicity, nationality, gender, age, physical and/or mental ability, sexual orientation, gender identity or expression, religion, or any other grounds that would impinge on an individual’s rights.',
            2: 'I will acknowledge specific dataset(s) and/or applicable accession number(s) as well as the UCSF Data Hub in my dissemination of research findings, as applicable to the medium or type of dissemination.',
            3: 'I will only share or distribute UCSF Portal data under terms consistent with this agreement, and the data or derivatives of the data may not be sold, in whole or in part, to any individual at any point in time for any purpose.',
            4: 'I will respect the privacy of research participants, and I will make no attempt to identify or contact individual participants or groups from whom data were collected or to generate information that could allow participants’ identities to be readily ascertained.',
            5: 'I agree to provide a brief statement regarding my intended use of the data on the UCSF Portal with my name and affiliation which will be publicly displayed for the purpose of transparency and collaboration.',
            6: 'I understand that participation in the UCSF community is voluntary and may be terminated by the UCSF Portal Administrator. I will report any actual or suspected violation of this agreement, even if unintentional, to the UCSF Portal Administrator. I understand that the UCSF Portal Administrator may take action to remedy any actual or suspected violation and/or report such behavior to the appropriate authorities.  I also understand that the UCSF Portal Administrator may immediately suspend or terminate my access to the UCSF Portal if there is an actual or suspected violation of this agreement.',
          },
          checkbox: 'I have read and agree to the UCSF Portal Terms and Conditions',
        },
        disclaimer: {
          title: 'UCSF Portal Disclaimers',
          bullets: {
            1: 'Data available in the UCSF Portal is provided on an AS-IS basis and may change over time.',
            2: 'The UCSF DCC does not warrant or assume any legal liability or responsibility for information, apparatus, product, or process contained in the UCSF Portal.',
            3: 'Content provided on the UCSF Portal is for informational purposes only and is not intended to be a substitute for independent professional medical judgment, advice, diagnosis, or treatment.',
          },
          checkbox: 'I have read and understand the UCSF Portal Disclaimers',
        },
        errors: 'Please accept the terms & conditions and portal disclaimers.',
      },
      registration: {
        notice:
          'Information provided here will be shared with the UCSF community on the UCSF Portal. All fields are required unless specified as optional.',
        sections: {
          identification: 'Identification',
          roleAndAffiliation: 'Role & Affiliation',
          researchAndDataUse: 'Research & Data Use',
        },
        labels: {
          firstName: 'First Name',
          lastName: 'Last Name',
          haveAUserID: 'I have an eRA Commons ID:',
          enterUserId: 'Please enter your eRA Commons ID',
          commercialUseReason:
            'Please provide a minimum of 1-2 sentences to describe your commercial use:',
          fullName: 'Full name',
          email: 'Email',
          iAmA: 'I am a:',
          pleaseDescribe: 'Please describe',
          iAmAffiliatedWith: 'I am affiliated with:',
          intendToUser: 'I intend to use the UCSF Portal data for:',
          dataUseStatement: 'Data use statement',
          researchAreaDescribe: 'My research area or area of interest may best be described as:',
        },
        placeHolders: {
          firstLast: 'First Last',
        },
        helps: {
          checkAllThatApply: 'Check all that apply',
          describeUseBelow: 'For other purpose, you must describe your use below',
          provideBriefDescription:
            'Provide a brief description and a link to your professional biography or organization website, if available',
          provideOrgAffiliation: 'Provide institutional or organizational affiliation',
        },
        noticeNotPublicInfo: 'This information will not be made public.',
        nameAndEmailOfIndividual:
          'Please provide the name and email address of an individual at your institution, organization, or similar who is aware of your intended use of the data (We do not expect to contact this individual except in cases where we need to verify your identity).',
        roleOptions: {
          1: 'Researcher at an academic or not-for-profit institution',
          2: 'Representative from a For-Profit or Commercial Entity',
          3: 'Tool or Algorithm Developer',
          4: 'Clinician',
          5: 'Community member',
          6: 'Federal Employee',
        },
        usageOptions: {
          1: 'Learning more about Down syndrome and its health outcomes, management, and/or treatment',
          2: 'Helping me design a new research study',
          3: 'Identifying datasets that I want to analyze',
          4: 'Commercial purposes',
        },
        userIdOptions: {
          1: 'Yes',
          2: 'No',
        },
        optionsOther: 'Other',
        noAffiliationOption: 'I do not have an institutional affiliation.',
      },
    },
  },
  facets: {
    file_id: 'File ID',
    // Participant
    participant_id: 'Participant ID',
    participant_facet_ids: {
      participant_fhir_id_1: 'Participant ID',
      participant_fhir_id_2: 'Participant ID',
    },
    file_facet_ids: {
      file_fhir_id_1: 'File ID',
      file_fhir_id_2: 'File ID',
    },
    biospecimen_facet_ids: {
      biospecimen_fhir_id_1: 'Sample ID',
      biospecimen_fhir_id_2: 'Sample ID',
    },
    study: {
      study_code: 'Study Code',
      study_name: 'Study Name',
      external_id: 'dbGaP Accession Number',
    },
    studies: {
      study_code: 'Study Code',
    },
    is_proband: 'Proband',
    study_id: 'Study Code',
    down_syndrome_status: 'Down Syndrome Status',
    down_syndrome_diagnosis: 'Down Syndrome Diagnosis',
    mondo: {
      name: 'Diagnosis (MONDO)',
    },
    diagnosis: {
      affected_status: 'Clinical Status',
      mondo_id_diagnosis: 'Diagnosis (MONDO)',
      ncit_id_diagnosis: 'Diagnosis (NCIT)',
      age_at_event_days: 'Age at Diagnosis',
      source_text: 'Diagnosis (Source Text)',
      source_text_tumor_location: 'Tumor Location (Source Text)',
    },
    outcomes: {
      age_at_event_days: {
        value: 'Age at Outcome',
      },
      vital_status: 'Vital Status',
    },
    phenotype: {
      hpo_phenotype_observed: 'Observed Phenotype (HPO)',
      hpo_phenotype_not_observed: 'Not Observed Phenotype (HPO)',
      age_at_event_days: 'Age at Observed Phenotype',
    },
    age_at_data_collection: 'Age at data collection',
    family_type: 'Family Unit',
    sex: 'Sex',
    ethnicity: 'Ethnicity',
    race: 'Race',
    observed_phenotype: {
      name: 'Phenotype (HPO)',
    },
    options: {
      D21: 'Disomy 21, euploid',
      T21: 'Trisomy 21',
    },

    // Biospecimen
    biospecimen_type: 'Biospecimen Type',
    sample_type: 'Sample Type',
    derived_sample_type: 'Derived Sample Type',
    ncit_id_tissue_type: 'Tissue Type (NCIT)',
    status: 'Availability',
    age_at_biospecimen_collection: 'Age at Biospec. Collection (days)',
    bio_repository: 'Biorepository',
    // File
    files: filesFacets,
    ...filesFacets,

    //Other
    collection_sample_type: 'Collection Sample Type',

    //Variants
    variant_class: 'Variant Type',
    type: 'Type',
    chromosome: 'Chromosome',
    position: 'Position',
    zygosity: 'Zygosity',
    transmissions: 'Transmission',
    genePanels: 'Gene Panels',
    start: 'Position',
    locus: 'Variant ID',
    consequences: {
      consequences: 'Consequence',
      biotype: 'Gene Type',
      vep_impact: 'VEP',
      symbol: 'Gene Symbol',
      symbol_id_1: 'Genes',
      predictions: {
        sift_pred: 'SIFT',
        polyphen2_hvar_pred: 'PolyPhen-2 HVAR',
        fathmm_pred: 'FATHMM',
        cadd_rankscore: 'CADD',
        lrt_pred: 'LRT',
        revel_rankscore: 'REVEL',
        dann_rankscore: 'DANN',
      },
    },
    genes: {
      hpo: {
        hpo_term_label: 'HPO',
      },
      orphanet: {
        panel: 'ORPHANET',
      },
      omim: {
        name: 'OMIM',
      },
      ddd: {
        disease_name: 'DDD',
      },
      cosmic: {
        tumour_types_germline: 'COSMIC',
      },
    },
    clinvar: {
      clin_sig: 'ClinVar',
    },
    frequencies: {
      internal: {
        upper_bound_kf: { af: 'KF Allele Frequency' },
      },
      gnomad_genomes_2_1: {
        af: 'gnomAD Genome 2.1',
      },
      gnomad_genomes_3_0: {
        af: 'gnomAD Genome 3.0',
      },
      gnomad_genomes_3_1_1: {
        af: 'gnomAD Genome 3.1',
      },
      gnomad_exomes_2_1: {
        af: 'gnomAD Exome 2.1',
      },
      topmed: {
        af: 'TopMed',
      },
      one_thousand_genomes: {
        af: '1000 Genomes',
      },
    },

    // Studies
    domain: 'Study Domain',
    population: 'Population',
    donors: {
      diagnoses: {
        tagged_icd: {
          main_category: 'Disease Type (ICD-10)',
        },
        tagged_mondo: {
          main_category: 'Diagnosis (MONDO)',
        },
      },
      observed_phenotype_tagged: {
        main_category: 'Type of Phenotypic Abnormality (HPO)',
      },
    },
  },
  entities: {
    file: {
      manifest: 'Manifest',
      fileAuthorization: 'File Authorization',
      fileReadMore: 'applying for data access.',
      locked:
        'You are unauthorized to access this file. Users requesting access to controlled data require an eRA Commons account and permissions from an associated Data Access Committee. Read more on ',
      unlocked: 'You are authorized to access and copy this file to your Cavatica workspace.',
      data_access: {
        title: 'Data Access',
        access: 'Access',
        dbgap_accession_number: 'dbGaP Accession Number',
        consent_codes: 'Consent Codes',
      },
      data_type: {
        title: 'Data Type',
        category: 'Category',
        type: 'Type',
        is_harmonized: 'Harmonized Data',
      },
      participant_sample: {
        collection_id: 'Collection ID',
        collection_sample_type: 'Collection Sample Type',
        external_collection_id: 'External Collection ID',
        external_participant_id: 'External Participant ID',
        external_sample_id: 'External Sample ID',
        participant_id: 'Participant ID',
        proband: 'Proband',
        sample_id: 'Sample ID',
        sample_type: 'Sample Type',
        study: 'Study',
        tissue_type_ncit: 'Tissue Type (NCIT)',
        tissue_type_source_text: 'Tissue Type (Source Text)',
        title: 'Participant / Sample',
      },
      experimental_procedure: {
        title: 'Experimental Procedure',
        experimental_strategy: 'Experimental Strategy',
        sequencing_type: 'Sequencing Type',
        platform: 'Platform',
        instrument_model: 'Instrument Model',
        library_strand: 'Library Strand',
        library_name: 'Library Name',
        total_reads: 'Total Reads',
        max_insert_size: 'Max Insert Size',
        mean_insert_size: 'Mean Insert Size',
        mean_depth: 'Mean Depth',
        mean_read_length: 'Mean Read Length',
        experiment_date: 'Experiment Date',
        sequencing_center_id: 'Sequencing Center ID',
      },
      summary: {
        title: 'Summary',
        file_id: 'ID',
        file_name: 'Name',
        study: 'Study',
        format: 'Format',
        size: 'Size',
        url: 'URL',
        hash: 'Hash',
        studies: '{count, plural, =0 {Study} =1 {Study} other {Studies}}',
        participants: '{count, plural, =0 {Participant} =1 {Participant} other {Participants}}',
        biospecimens: '{count, plural, =0 {Biospecimen} =1 {Biospecimen} other {Biospecimens}}',
      },
    },
  },
};

export default en;
