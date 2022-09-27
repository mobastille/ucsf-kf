import { gql } from '@apollo/client';

export const SEARCH_PARTICIPANT_QUERY = gql`
  query searchParticipant($sqon: JSON, $first: Int, $offset: Int, $sort: [Sort]) {
    participants: participant {
      hits(filters: $sqon, first: $first, offset: $offset, sort: $sort) {
        total
        edges {
          node {
            id
            participant_id
            families_id
            is_proband
            sex
            nb_biospecimens
            nb_files
            race
            ethnicity
            external_id

            files {
              hits {
                total
              }
            }
            study {
              study_id
              external_id
              study_name
              program
              study_code
              controlled_access
            }
            diagnosis {
              hits {
                total
                edges {
                  node {
                    id
                    diagnosis_id
                    score
                    affected_status
                    affected_status_text
                    source_text
                    source_text_tumor_location
                    age_at_event {
                      value
                    }
                  }
                }
              }
            }
            phenotype {
              hits {
                total
                edges {
                  node {
                    id
                    score
                    age_at_event_days
                    hpo_phenotype_not_observed
                    hpo_phenotype_not_observed_text
                    hpo_phenotype_observed
                    hpo_phenotype_observed_text
                    observed
                  }
                }
              }
            }
            observed_phenotype {
              hits {
                total
                edges {
                  node {
                    id
                    name
                    is_leaf
                    is_tagged
                    name
                    parents
                    score
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const MATCH_PARTICIPANT_QUERY = gql`
  query fetchMatchParticipant($sqon: JSON) {
    participants: participant {
      hits(filters: $sqon) {
        edges {
          node {
            participant_id: id
            study {
              hits {
                total
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
        total
      }
    }
  }
`;

export const GET_PARTICIPANT_COUNT = gql`
  query getParticipantCount($sqon: JSON) {
    participants: participant {
      hits(filters: $sqon) {
        total
      }
    }
  }
`;
export const CHECK_PARTICIPANT_MATCH = gql`
  query fetchMatchParticipant($sqon: JSON, $first: Int, $offset: Int) {
    participant {
      hits(filters: $sqon, first: $first, offset: $offset) {
        edges {
          node {
            fhir_id
            participant_id
            external_id
            study_id
          }
        }
      }
    }
  }
`;
export const PARTICIPANT_SEARCH_BY_ID_QUERY = gql`
  query searchParticipantById($sqon: JSON) {
    participants: participant {
      hits(filters: $sqon) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
