const organizations = [
  {
    name: 'postgresql',
    tech: ['c', 'python', 'postgresql', 'javascript', 'sql'],
    topics: ['web', 'database', 'ui', 'sql', 'benchmark']
  },
  {
    name: 'chromium',
    tech: ['java', 'python', 'cpp', 'javascript', 'git'],
    topics: ['web', 'browser', 'os']
  },
  {
    name: 'submitty',
    tech: ['postgresql', 'python', 'php', 'javascript', 'cpp'],
    topics: ['education', 'visualisation', 'web', 'privacy', 'communication']
  },
  {
    name: 'plone',
    tech: ['python', 'javascript', 'react'],
    topics: ['web', 'cms']
  },
  {
    name: 'metabrainz',
    tech: ['react', 'python', 'perl', 'postgresql', 'spark'],
    topics: ['open data', 'music', 'books', 'music recommendation', 'music social network']
  },
  {
    name: 'learningequality',
    tech: ['python', 'javascript', 'django', 'vue'],
    topics: ['education', 'distributed databases', 'offline', 'learning']
  },
  {
    name: 'wagtail',
    tech: ['python', 'javascript', 'django'],
    topics: ['web', 'cms', 'accessibility']
  },
  {
    name: 'camicroscope',
    tech: ['python', 'javascript', 'tensorflow', 'mongodb', 'opencv'],
    topics: ['image analysis', 'data visualisation', 'aiml', 'microscopy', 'dicom pathology']
  },
  {
    name: 'mathesar',
    tech: ['python', 'javascript', 'django', 'postgresql', 'svelte'],
    topics: ['web', 'databases', 'self hosted']
  },
  {
    name: 'creativecommons',
    tech: ['python', 'javascript', 'php', 'css', 'wordpress'],
    topics: ['web', 'copyleft', 'creative commons', 'legal', 'nonprofit']
  },
  {
    name: 'sugarlabs',
    tech: ['python', 'gtk', 'typescript', 'javascript'],
    topics: ['games', 'desktop', 'education']
  },
  {
    name: 'cbioportal',
    tech: ['java', 'javascript', 'react', 'typescript', 'mysql'],
    topics: ['genomics', 'cancer', 'bioinformatics', 'big data', 'precision medicine']
  },
  {
    name: 'drupal',
    tech: ['html', 'javascript', 'php', 'mysql', 'symphony'],
    topics: ['web', 'cloud', 'dxp', 'massive community', 'inclusive']
  },
  {
    name: 'wikimedia',
    tech: ['html', 'javascript', 'php', 'python', 'css'],
    topics: ['semantic web', 'wikipedia', 'wikimedia', 'mediawiki', 'i18n']
  },
  {
    name: 'xwiki',
    tech: ['scala', 'java', 'html', 'velocity', 'css'],
    topics: ['web', 'platform', 'wiki', 'structured data']
  },
  {
    name: 'sat',
    tech: ['opengl', 'javascript', 'cpp', 'python', 'supercollider'],
    topics: ['web', 'graphics', 'cloud', 'multimedia', 'accessibility']
  },
  {
    name: 'processing',
    tech: ['java', 'opengl', 'javascript', 'python', 'android'],
    topics: ['web', 'graphics', 'creative coding', 'design', 'education']
  },
  {
    name: 'openstreetmap',
    tech: ['java', 'cpp', 'javascript', 'python', 'sql'],
    topics: ['database', 'routing', 'gis', 'ui', 'geocoding']
  },
  {
    name: 'internetarchive',
    tech: ['elastic search', 'go', 'javascript', 'python', 'hadoop'],
    topics: ['library', 'media', 'archiving']
  },
  {
    name: 'omegaup',
    tech: ['mysql', 'php', 'typescript', 'vue', 'python'],
    topics: ['web', 'edtech', 'uiux', 'cloud', 'education']
  },
  {
    name: 'honeyjet',
    tech: ['go', 'django', 'javascript', 'docker', 'python'],
    topics: ['honeypots', 'malware analysis', 'threat intelligence']
  },
  {
    name: 'qdrant',
    tech: ['javascript', 'rust', 'python'],
    topics: ['databases', 'machine learning', 'search engine']
  },
  {
    name: 'openmrs',
    tech: ['javascript', 'react', 'fhir', 'java', 'mysql'],
    topics: ['platform', 'frontend', 'electronic medical record system', 'qa automation']
  },
  {
    name: 'purr',
    tech: ['javascript', 'html', 'emscripten', 'c'],
    topics: ['web', 'graphics', 'audio', 'realtime']
  },
  {
    name: 'sympy',
    tech: ['numpy', 'jupyter', 'python'],
    topics: ['mathematics', 'physics', 'symbolic mathematics']
  },
  {
    name: 'aboutcode',
    tech: ['javascript', 'rust', 'python', 'django', 'postgresql', 'c', 'go'],
    topics: ['dependencies', 'vulnerabilities', 'software composition analysis', 'license', 'sbom']
  },
  {
    name: 'rocketchat',
    tech: ['javascript', 'raspberry', 'typescript', 'node', 'meteor js'],
    topics: ['communications', 'messaging', 'group chat', 'team collab', 'chat platform']
  },
  {
    name: 'zulip',
    tech: ['css', 'django', 'typescript', 'python', 'electron'],
    topics: ['team chat', 'great developing tool', 'integrations', 'teaching quality codebase', 'visual design']
  },
  {
    name: 'oppia',
    tech: ['python', 'google app engine', 'typescript', 'angular'],
    topics: ['education', 'web', 'community', 'nonprofit', 'social impact']
  },
  {
    name: 'osgeo',
    tech: ['python', 'google app engine', 'typescript', 'angular'],
    topics: ['open science', 'gis', 'citizen science', 'geolocation', 'mapping']
  },
  {
    name: 'owasp',
    tech: ['python', 'javascript', 'java', 'zap', 'juice shop'],
    topics: ['web', 'cloud', 'app security', 'cybersecurity', 'devsecops']
  },
];

document.addEventListener("DOMContentLoaded", function () {

  const techFilter = document.getElementById("tech-filter");
  const topicsFilter = document.getElementById("topics-filter");
  const resultContainer = document.getElementById("result");

  function filterOrganizations() {
      const selectedTech = Array.from(techFilter.querySelectorAll("input:checked")).map(input => input.value);
      const selectedTopics = Array.from(topicsFilter.querySelectorAll("input:checked")).map(input => input.value);

      const filteredOrganizations = organizations.filter(org =>
          selectedTech.every(tech => org.tech.includes(tech)) &&
          selectedTopics.every(topic => org.topics.includes(topic))
      );

      displayOrganizations(filteredOrganizations);
  }

  function displayOrganizations(organizations) {
      resultContainer.innerHTML = "";

      if (organizations.length === 0) {
          resultContainer.textContent = "No organizations match the selected filters.";
      } else {
          organizations.forEach(org => {
              const orgElement = document.createElement("div");
              orgElement.textContent = org.name;
              resultContainer.appendChild(orgElement);
          });
      }
  }

  // Attach event listeners to checkboxes for filtering
  techFilter.addEventListener("change", filterOrganizations);
  topicsFilter.addEventListener("change", filterOrganizations);

  // Initial load
  filterOrganizations();
});
