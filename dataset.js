{
  "data": {
    "dataSetMetadata": {
      "uri": "https://data.goldenagents.org/datasets/ufab7d657a250e3461361c982ce9b38f3816e0c4b/ecartico_20200316/",
      "dataSetId": "ufab7d657a250e3461361c982ce9b38f3816e0c4b__ecartico_20200316",
      "dataSetName": "ecartico_20200316",
      "title": {
        "value": "CREATE: Ecartico"
      },
      "description": {
        "value": "Linking cultural industries in the early modern Low Countries, ca. 1475 - ca. 1725. (16-03-2020)"
      },
      "prefixMappings": [
        {
          "prefix": "schema",
          "uri": "http://schema.org/"
        },
        {
          "prefix": "local_col",
          "uri": "https://data.goldenagents.org/collection/"
        },
        {
          "prefix": "void",
          "uri": "http://rdfs.org/ns/void#"
        },
        {
          "prefix": "owl",
          "uri": "http://www.w3.org/2002/07/owl#"
        },
        {
          "prefix": "local_pred",
          "uri": "https://data.goldenagents.org/predicate/"
        },
        {
          "prefix": "xsd",
          "uri": "http://www.w3.org/2001/XMLSchema#"
        },
        {
          "prefix": "skos",
          "uri": "http://www.w3.org/2004/02/skos/core#"
        },
        {
          "prefix": "tim_type",
          "uri": "http://timbuctoo.huygens.knaw.nl/static/v5/datatype/"
        },
        {
          "prefix": "bio",
          "uri": "http://purl.org/vocab/bio/0.1/"
        },
        {
          "prefix": "rdfs",
          "uri": "http://www.w3.org/2000/01/rdf-schema#"
        },
        {
          "prefix": "dbpedia",
          "uri": "http://dbpedia.org/resource/"
        },
        {
          "prefix": "tim_pred",
          "uri": "http://timbuctoo.huygens.knaw.nl/static/v5/predicate/"
        },
        {
          "prefix": "edm",
          "uri": "http://www.europeana.eu/schemas/edm/"
        },
        {
          "prefix": "rdf",
          "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        },
        {
          "prefix": "tim_col",
          "uri": "http://timbuctoo.huygens.knaw.nl/static/v5/collection/"
        },
        {
          "prefix": "dcterms",
          "uri": "http://purl.org/dc/terms/"
        },
        {
          "prefix": "tim",
          "uri": "http://timbuctoo.huygens.knaw.nl/static/v5/vocabulary#"
        },
        {
          "prefix": "pnv",
          "uri": "https://w3id.org/pnv#"
        },
        {
          "prefix": "sem",
          "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/"
        },
        {
          "prefix": "local_type",
          "uri": "https://data.goldenagents.org/datatype/"
        },
        {
          "prefix": "dcat",
          "uri": "http://www.w3.org/ns/dcat#"
        },
        {
          "prefix": "prov",
          "uri": "http://www.w3.org/ns/prov#"
        },
        {
          "prefix": "foaf",
          "uri": "http://xmlns.com/foaf/0.1/"
        }
      ],
      "collectionList": {
        "items": [
          {
            "uri": "http://schema.org/Article",
            "collectionId": "schema_Article",
            "shortenedUri": "schema:Article",
            "title": null,
            "total": 1857,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/citation",
                  "name": "_inverse_schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 98,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/url",
                  "name": "schema_url",
                  "shortenedUri": "schema:url",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 23,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown",
                      "schema_PublicationIssue",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/author",
                  "name": "schema_authorList",
                  "shortenedUri": "schema:author",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 98,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/partOf",
                  "name": "_inverse_schema_partOfList",
                  "shortenedUri": "schema:partOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 24,
                  "referencedCollections": {
                    "items": [
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/pagination",
                  "name": "schema_pagination",
                  "shortenedUri": "schema:pagination",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 88,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Occupation",
            "collectionId": "schema_Occupation",
            "shortenedUri": "schema:Occupation",
            "title": null,
            "total": 1294,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#prefLabel",
                  "name": "skos_prefLabelList",
                  "shortenedUri": "skos:prefLabel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "_inverse_foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#superClassOf",
                  "name": "_inverse_owl_superClassOf",
                  "shortenedUri": "owl:superClassOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#altLabel",
                  "name": "skos_altLabelList",
                  "shortenedUri": "skos:altLabel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 2,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/hasOccupation",
                  "name": "_inverse_schema_hasOccupationList",
                  "shortenedUri": "schema:hasOccupation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 98,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#comment",
                  "name": "rdfs_commentList",
                  "shortenedUri": "rdfs:comment",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#subClassOf",
                  "name": "_inverse_owl_subClassOfList",
                  "shortenedUri": "owl:subClassOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "_inverse_schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#exactMatch",
                  "name": "_inverse_skos_exactMatchList",
                  "shortenedUri": "skos:exactMatch",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#closeMatch",
                  "name": "skos_closeMatch",
                  "shortenedUri": "skos:closeMatch",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#superClassOf",
                  "name": "owl_superClassOfList",
                  "shortenedUri": "owl:superClassOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#closeMatch",
                  "name": "_inverse_skos_closeMatch",
                  "shortenedUri": "skos:closeMatch",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "_inverse_owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#subClassOf",
                  "name": "owl_subClassOf",
                  "shortenedUri": "owl:subClassOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#exactMatch",
                  "name": "skos_exactMatchList",
                  "shortenedUri": "skos:exactMatch",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_labelList",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#disjointWith",
                  "name": "owl_disjointWith",
                  "shortenedUri": "owl:disjointWith",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#disjointWith",
                  "name": "_inverse_owl_disjointWith",
                  "shortenedUri": "owl:disjointWith",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "_inverse_schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 14,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "tim_unknown"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Person",
            "collectionId": "schema_Person",
            "shortenedUri": "schema:Person",
            "title": null,
            "total": 50995,
            "properties": {
              "items": [
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/spouse",
                  "name": "schema_spouseList",
                  "shortenedUri": "schema:spouse",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathPlace",
                  "name": "schema_deathPlace",
                  "shortenedUri": "schema:deathPlace",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 31,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#hasName",
                  "name": "https___w3id_org_pnv_hasName",
                  "shortenedUri": "pnv:hasName",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "https___w3id_org_pnv_PersonName"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nameVariants",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nameVariants",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nameVariants",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 15,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathDate",
                  "name": "schema_deathDate",
                  "shortenedUri": "schema:deathDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 43,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue",
                      "rdf_Alt",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#motto",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__mottoList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#motto",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModelList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/parent",
                  "name": "schema_parentList",
                  "shortenedUri": "schema:parent",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 27,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "schema_workLocationList",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 51,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "_inverse_owl_differentFromList",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/name",
                  "name": "foaf_name",
                  "shortenedUri": "foaf:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "_inverse_foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/children",
                  "name": "_inverse_schema_childrenList",
                  "shortenedUri": "schema:children",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 27,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/hasOccupation",
                  "name": "schema_hasOccupationList",
                  "shortenedUri": "schema:hasOccupation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 57,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthPlace",
                  "name": "schema_birthPlace",
                  "shortenedUri": "schema:birthPlace",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 51,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pseudonym",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pseudonymList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pseudonym",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 17,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#penName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__penNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#penName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutorList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthDate",
                  "name": "schema_birthDate",
                  "shortenedUri": "schema:birthDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 46,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue",
                      "rdf_Alt",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "owl_differentFromList",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/spouse",
                  "name": "_inverse_schema_spouseList",
                  "shortenedUri": "schema:spouse",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/parent",
                  "name": "_inverse_schema_parentList",
                  "shortenedUri": "schema:parent",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 32,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 5,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/gender",
                  "name": "foaf_gender",
                  "shortenedUri": "foaf:gender",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/gender",
                  "name": "schema_gender",
                  "shortenedUri": "schema:gender",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#hiddenLabel",
                  "name": "skos_hiddenLabelList",
                  "shortenedUri": "skos:hiddenLabel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 17,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nickName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nickNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nickName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 5,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModelList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religiousName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__religiousNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religiousName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "_inverse_schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religion",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__religionList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religion",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 9,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/partner",
                  "name": "_inverse_http___purl_org_vocab_bio_0_1_partnerList",
                  "shortenedUri": "bio:partner",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/children",
                  "name": "schema_childrenList",
                  "shortenedUri": "schema:children",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 32,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bentName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bentNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bentName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://purl.org/vocab/bio/0.1/Marriage",
            "collectionId": "http___purl_org_vocab_bio_0_1_Marriage",
            "shortenedUri": "bio:Marriage",
            "title": null,
            "total": 38511,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "schema_sameAs",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2006/time#hasTime",
                  "name": "http___www_w3_org_2006_time_hasTime",
                  "shortenedUri": "http://www.w3.org/2006/time#hasTime",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 87,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue",
                      "rdf_Alt",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/place",
                  "name": "http___purl_org_vocab_bio_0_1_place",
                  "shortenedUri": "bio:place",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 75,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "_inverse_owl_sameAs",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 99,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "_inverse_schema_sameAs",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 99,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/partner",
                  "name": "http___purl_org_vocab_bio_0_1_partnerList",
                  "shortenedUri": "bio:partner",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "owl_sameAs",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage",
                      "tim_unknown"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/PublicationIssue",
            "collectionId": "schema_PublicationIssue",
            "shortenedUri": "schema:PublicationIssue",
            "title": null,
            "total": 1498,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/datePublished",
                  "name": "schema_datePublished",
                  "shortenedUri": "schema:datePublished",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown",
                      "schema_PublicationVolume"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "_inverse_schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Article"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Role",
            "collectionId": "schema_Role",
            "shortenedUri": "schema:Role",
            "title": null,
            "total": 95380,
            "properties": {
              "items": [
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/hasOccupation",
                  "name": "_inverse_schema_hasOccupation",
                  "shortenedUri": "schema:hasOccupation",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 47,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModel",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#scopeNote",
                  "name": "skos_scopeNote",
                  "shortenedUri": "skos:scopeNote",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 2,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "schema_workLocation",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 37,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown",
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "_inverse_owl_differentFrom",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriage",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "_inverse_schema_workLocation",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 37,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayed",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/hasOccupation",
                  "name": "schema_hasOccupation",
                  "shortenedUri": "schema:hasOccupation",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 47,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriage",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "owl_differentFrom",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/endDate",
                  "name": "schema_endDate",
                  "shortenedUri": "schema:endDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 56,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModel",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWith",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayed",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/startDate",
                  "name": "schema_startDate",
                  "shortenedUri": "schema:startDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 56,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageBy",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/ArchiveComponent",
            "collectionId": "schema_ArchiveComponent",
            "shortenedUri": "schema:ArchiveComponent",
            "title": null,
            "total": 233,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/datePublished",
                  "name": "schema_datePublished",
                  "shortenedUri": "schema:datePublished",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/citation",
                  "name": "_inverse_schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 98,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/holdingArchive",
                  "name": "schema_holdingArchive",
                  "shortenedUri": "schema:holdingArchive",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/url",
                  "name": "schema_url",
                  "shortenedUri": "schema:url",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/author",
                  "name": "schema_author",
                  "shortenedUri": "schema:author",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/partOf",
                  "name": "_inverse_schema_partOfList",
                  "shortenedUri": "schema:partOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 93,
                  "referencedCollections": {
                    "items": [
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/publisher",
                  "name": "schema_publisher",
                  "shortenedUri": "schema:publisher",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Organization"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_nameList",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt",
            "collectionId": "rdf_Alt",
            "shortenedUri": "rdf:Alt",
            "title": null,
            "total": 512,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2006/time#hasTime",
                  "name": "_inverse_http___www_w3_org_2006_time_hasTime",
                  "shortenedUri": "http://www.w3.org/2006/time#hasTime",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#li",
                  "name": "rdf_liList",
                  "shortenedUri": "rdf:li",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/birthDate",
                  "name": "_inverse_schema_birthDate",
                  "shortenedUri": "schema:birthDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 21,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathDate",
                  "name": "_inverse_schema_deathDate",
                  "shortenedUri": "schema:deathDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 76,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/CreativeWork",
            "collectionId": "schema_CreativeWork",
            "shortenedUri": "schema:CreativeWork",
            "title": null,
            "total": 122058,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/dateModified",
                  "name": "schema_dateModified",
                  "shortenedUri": "schema:dateModified",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 24,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/citation",
                  "name": "_inverse_schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 58,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#comment",
                  "name": "rdfs_comment",
                  "shortenedUri": "rdfs:comment",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 6,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/partOf",
                  "name": "schema_partOf",
                  "shortenedUri": "schema:partOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 58,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_ArchiveComponent",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/citation",
                  "name": "schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 37,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_ArchiveComponent",
                      "schema_CreativeWork",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/volumeNumber",
                  "name": "schema_volumeNumber",
                  "shortenedUri": "schema:volumeNumber",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 8,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/url",
                  "name": "schema_url",
                  "shortenedUri": "schema:url",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 9,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 41,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/pagination",
                  "name": "schema_pagination",
                  "shortenedUri": "schema:pagination",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 55,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 41,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/identifier",
                  "name": "schema_identifier",
                  "shortenedUri": "schema:identifier",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 39,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/DataFeedItem",
            "collectionId": "schema_DataFeedItem",
            "shortenedUri": "schema:DataFeedItem",
            "title": null,
            "total": 50995,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/dateModified",
                  "name": "schema_dateModified",
                  "shortenedUri": "schema:dateModified",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 58,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/citation",
                  "name": "schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 90,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_ArchiveComponent",
                      "schema_CreativeWork",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/StructuredValue",
            "collectionId": "schema_StructuredValue",
            "shortenedUri": "schema:StructuredValue",
            "title": null,
            "total": 40414,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
                  "name": "rdf_value",
                  "shortenedUri": "rdf:value",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 67,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2006/time#hasTime",
                  "name": "_inverse_http___www_w3_org_2006_time_hasTime",
                  "shortenedUri": "http://www.w3.org/2006/time#hasTime",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 12,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthDate",
                  "name": "_inverse_schema_birthDate",
                  "shortenedUri": "schema:birthDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 48,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathDate",
                  "name": "_inverse_schema_deathDate",
                  "shortenedUri": "schema:deathDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 39,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/#hasEarliestBeginTimeStamp",
                  "name": "http___semanticweb_cs_vu_nl_2009_11_sem__hasEarliestBeginTimeStamp",
                  "shortenedUri": "sem:#hasEarliestBeginTimeStamp",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 17,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/minValue",
                  "name": "schema_minValue",
                  "shortenedUri": "schema:minValue",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 17,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/maxValue",
                  "name": "schema_maxValue",
                  "shortenedUri": "schema:maxValue",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 21,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/#hasLatestEndTimeStamp",
                  "name": "http___semanticweb_cs_vu_nl_2009_11_sem__hasLatestEndTimeStamp",
                  "shortenedUri": "sem:#hasLatestEndTimeStamp",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 21,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#scopeNote",
                  "name": "skos_scopeNote",
                  "shortenedUri": "skos:scopeNote",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 34,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/measurementTechnique",
                  "name": "schema_measurementTechnique",
                  "shortenedUri": "schema:measurementTechnique",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 33,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://rdfs.org/ns/void#Dataset",
            "collectionId": "void_Dataset",
            "shortenedUri": "void:Dataset",
            "title": null,
            "total": 1,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#sparqlEndpoint",
                  "name": "void_sparqlEndpoint",
                  "shortenedUri": "void:sparqlEndpoint",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/contributor",
                  "name": "dcterms_contributorList",
                  "shortenedUri": "dcterms:contributor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/source",
                  "name": "dcterms_source",
                  "shortenedUri": "dcterms:source",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/depiction",
                  "name": "foaf_depiction",
                  "shortenedUri": "foaf:depiction",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/description",
                  "name": "dcterms_description",
                  "shortenedUri": "dcterms:description",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/modified",
                  "name": "dcterms_modified",
                  "shortenedUri": "dcterms:modified",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/provenance",
                  "name": "dcterms_provenance",
                  "shortenedUri": "dcterms:provenance",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/publisher",
                  "name": "dcterms_publisher",
                  "shortenedUri": "dcterms:publisher",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/subject",
                  "name": "dcterms_subjectList",
                  "shortenedUri": "dcterms:subject",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.europeana.eu/schemas/edm/dataProvider",
                  "name": "edm_dataProvider",
                  "shortenedUri": "edm:dataProvider",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/title",
                  "name": "dcterms_title",
                  "shortenedUri": "dcterms:title",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/license",
                  "name": "dcterms_license",
                  "shortenedUri": "dcterms:license",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#vocabulary",
                  "name": "void_vocabularyList",
                  "shortenedUri": "void:vocabulary",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#feature",
                  "name": "void_feature",
                  "shortenedUri": "void:feature",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/created",
                  "name": "dcterms_created",
                  "shortenedUri": "dcterms:created",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/creator",
                  "name": "dcterms_creatorList",
                  "shortenedUri": "dcterms:creator",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Periodical",
            "collectionId": "schema_Periodical",
            "shortenedUri": "schema:Periodical",
            "title": null,
            "total": 1498,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "_inverse_schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 94,
                  "referencedCollections": {
                    "items": [
                      "schema_PublicationVolume"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Organization",
            "collectionId": "schema_Organization",
            "shortenedUri": "schema:Organization",
            "title": null,
            "total": 1501,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/publisher",
                  "name": "_inverse_schema_publisher",
                  "shortenedUri": "schema:publisher",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_ArchiveComponent",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/location",
                  "name": "schema_location",
                  "shortenedUri": "schema:location",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/GeoCoordinates",
            "collectionId": "schema_GeoCoordinates",
            "shortenedUri": "schema:GeoCoordinates",
            "title": null,
            "total": 2981,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/geo",
                  "name": "_inverse_schema_geo",
                  "shortenedUri": "schema:geo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/latitude",
                  "name": "schema_latitude",
                  "shortenedUri": "schema:latitude",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/longitude",
                  "name": "schema_longitude",
                  "shortenedUri": "schema:longitude",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Place",
            "collectionId": "schema_Place",
            "shortenedUri": "schema:Place",
            "title": null,
            "total": 2981,
            "properties": {
              "items": [
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "_inverse_foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 99,
                  "referencedCollections": {
                    "items": [
                      "schema_Place",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathPlace",
                  "name": "_inverse_schema_deathPlaceList",
                  "shortenedUri": "schema:deathPlace",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 19,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "_inverse_schema_workLocationList",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 34,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "_inverse_schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "_inverse_owl_sameAs",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/place",
                  "name": "_inverse_http___purl_org_vocab_bio_0_1_placeList",
                  "shortenedUri": "bio:place",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 9,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "_inverse_schema_sameAs",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/geo",
                  "name": "schema_geo",
                  "shortenedUri": "schema:geo",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_GeoCoordinates"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 99,
                  "referencedCollections": {
                    "items": [
                      "schema_Place",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthPlace",
                  "name": "_inverse_schema_birthPlaceList",
                  "shortenedUri": "schema:birthPlace",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 57,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "https://w3id.org/pnv#PersonName",
            "collectionId": "https___w3id_org_pnv_PersonName",
            "shortenedUri": "pnv:PersonName",
            "title": null,
            "total": 50995,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#givenName",
                  "name": "https___w3id_org_pnv_givenName",
                  "shortenedUri": "pnv:givenName",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 99,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#hasName",
                  "name": "_inverse_https___w3id_org_pnv_hasName",
                  "shortenedUri": "pnv:hasName",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#baseSurname",
                  "name": "https___w3id_org_pnv_baseSurname",
                  "shortenedUri": "pnv:baseSurname",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 82,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#patronym",
                  "name": "https___w3id_org_pnv_patronym",
                  "shortenedUri": "pnv:patronym",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 31,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#surnamePrefix",
                  "name": "https___w3id_org_pnv_surnamePrefix",
                  "shortenedUri": "pnv:surnamePrefix",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 29,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://timbuctoo.huygens.knaw.nl/static/v5/vocabulary#unknown",
            "collectionId": "tim_unknown",
            "shortenedUri": "tim:unknown",
            "title": null,
            "total": 54748,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/holdingArchive",
                  "name": "_inverse_schema_holdingArchive",
                  "shortenedUri": "schema:holdingArchive",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_ArchiveComponent"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/dateModified",
                  "name": "schema_dateModified",
                  "shortenedUri": "schema:dateModified",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 5,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/measurementTechnique",
                  "name": "_inverse_schema_measurementTechniqueList",
                  "shortenedUri": "schema:measurementTechnique",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/license",
                  "name": "_inverse_dcterms_licenseList",
                  "shortenedUri": "dcterms:license",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#feature",
                  "name": "_inverse_void_feature",
                  "shortenedUri": "void:feature",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/ContactPoint",
                  "name": "schema_ContactPoint",
                  "shortenedUri": "schema:ContactPoint",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/description",
                  "name": "dcterms_description",
                  "shortenedUri": "dcterms:description",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/source",
                  "name": "_inverse_dcterms_source",
                  "shortenedUri": "dcterms:source",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/children",
                  "name": "_inverse_schema_childrenList",
                  "shortenedUri": "schema:children",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "_inverse_schema_workLocationList",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#dataDump",
                  "name": "void_dataDump",
                  "shortenedUri": "void:dataDump",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#dataDump",
                  "name": "_inverse_void_dataDump",
                  "shortenedUri": "void:dataDump",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/partner",
                  "name": "_inverse_http___purl_org_vocab_bio_0_1_partner",
                  "shortenedUri": "bio:partner",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/rightsHolder",
                  "name": "dcterms_rightsHolder",
                  "shortenedUri": "dcterms:rightsHolder",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#vocabulary",
                  "name": "_inverse_void_vocabulary",
                  "shortenedUri": "void:vocabulary",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/provenance",
                  "name": "dcterms_provenance",
                  "shortenedUri": "dcterms:provenance",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/depiction",
                  "name": "_inverse_foaf_depiction",
                  "shortenedUri": "foaf:depiction",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/provenance",
                  "name": "_inverse_dcterms_provenance",
                  "shortenedUri": "dcterms:provenance",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset",
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/license",
                  "name": "dcterms_license",
                  "shortenedUri": "dcterms:license",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/title",
                  "name": "dcterms_title",
                  "shortenedUri": "dcterms:title",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "_inverse_rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_Occupation",
                      "schema_Person",
                      "http___purl_org_vocab_bio_0_1_Marriage",
                      "schema_PublicationIssue",
                      "schema_Role",
                      "schema_ArchiveComponent",
                      "rdf_Alt",
                      "schema_CreativeWork",
                      "schema_DataFeedItem",
                      "schema_StructuredValue",
                      "void_Dataset",
                      "schema_Periodical",
                      "schema_Organization",
                      "schema_GeoCoordinates",
                      "https___w3id_org_pnv_PersonName",
                      "schema_Place",
                      "schema_PublicationVolume",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time",
                      "foaf_Person",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/spouse",
                  "name": "_inverse_schema_spouse",
                  "shortenedUri": "schema:spouse",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/ContactPoint",
                  "name": "_inverse_schema_ContactPoint",
                  "shortenedUri": "schema:ContactPoint",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/url",
                  "name": "_inverse_schema_urlList",
                  "shortenedUri": "schema:url",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 14,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_ArchiveComponent",
                      "schema_CreativeWork",
                      "schema_Book"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "_inverse_owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 76,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "schema_Person",
                      "http___purl_org_vocab_bio_0_1_Marriage",
                      "schema_Place",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/email",
                  "name": "schema_email",
                  "shortenedUri": "schema:email",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 7,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "_inverse_schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 76,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "schema_Person",
                      "http___purl_org_vocab_bio_0_1_Marriage",
                      "schema_Place",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/gender",
                  "name": "_inverse_foaf_genderList",
                  "shortenedUri": "foaf:gender",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/gender",
                  "name": "_inverse_schema_genderList",
                  "shortenedUri": "schema:gender",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "_inverse_schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Article",
                      "schema_PublicationIssue"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/location",
                  "name": "schema_location",
                  "shortenedUri": "schema:location",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 7,
                  "referencedCollections": {
                    "items": [
                      "schema_Occupation",
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://rdfs.org/ns/void#sparqlEndpoint",
                  "name": "_inverse_void_sparqlEndpoint",
                  "shortenedUri": "void:sparqlEndpoint",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "void_Dataset"
                    ]
                  }
                },
                {
                  "uri": "http://purl.org/dc/terms/rightsHolder",
                  "name": "_inverse_dcterms_rightsHolder",
                  "shortenedUri": "dcterms:rightsHolder",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/PublicationVolume",
            "collectionId": "schema_PublicationVolume",
            "shortenedUri": "schema:PublicationVolume",
            "title": null,
            "total": 1418,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/volumeNumber",
                  "name": "schema_volumeNumber",
                  "shortenedUri": "schema:volumeNumber",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_Periodical"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "_inverse_schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_PublicationIssue"
                    ]
                  }
                }
              ]
            }
          },
          {
            "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/#Time",
            "collectionId": "http___semanticweb_cs_vu_nl_2009_11_sem__Time",
            "shortenedUri": "sem:#Time",
            "title": null,
            "total": 13224,
            "properties": {
              "items": [
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2006/time#hasTime",
                  "name": "_inverse_http___www_w3_org_2006_time_hasTime",
                  "shortenedUri": "http://www.w3.org/2006/time#hasTime",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 34,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthDate",
                  "name": "_inverse_schema_birthDate",
                  "shortenedUri": "schema:birthDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 10,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathDate",
                  "name": "_inverse_schema_deathDate",
                  "shortenedUri": "schema:deathDate",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 55,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/#hasEarliestBeginTimeStamp",
                  "name": "http___semanticweb_cs_vu_nl_2009_11_sem__hasEarliestBeginTimeStamp",
                  "shortenedUri": "sem:#hasEarliestBeginTimeStamp",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 52,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/minValue",
                  "name": "schema_minValue",
                  "shortenedUri": "schema:minValue",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 52,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/maxValue",
                  "name": "schema_maxValue",
                  "shortenedUri": "schema:maxValue",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 67,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://semanticweb.cs.vu.nl/2009/11/sem/#hasLatestEndTimeStamp",
                  "name": "http___semanticweb_cs_vu_nl_2009_11_sem__hasLatestEndTimeStamp",
                  "shortenedUri": "sem:#hasLatestEndTimeStamp",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 67,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#scopeNote",
                  "name": "skos_scopeNote",
                  "shortenedUri": "skos:scopeNote",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://schema.org/Book",
            "collectionId": "schema_Book",
            "shortenedUri": "schema:Book",
            "title": null,
            "total": 1742,
            "properties": {
              "items": [
                {
                  "uri": "http://schema.org/datePublished",
                  "name": "schema_datePublished",
                  "shortenedUri": "schema:datePublished",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/citation",
                  "name": "_inverse_schema_citationList",
                  "shortenedUri": "schema:citation",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 79,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_type",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/url",
                  "name": "schema_url",
                  "shortenedUri": "schema:url",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 11,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/author",
                  "name": "schema_authorList",
                  "shortenedUri": "schema:author",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 72,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/editor",
                  "name": "schema_editorList",
                  "shortenedUri": "schema:editor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 20,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/partOf",
                  "name": "_inverse_schema_partOfList",
                  "shortenedUri": "schema:partOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 38,
                  "referencedCollections": {
                    "items": [
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 80,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/publisher",
                  "name": "schema_publisher",
                  "shortenedUri": "schema:publisher",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 86,
                  "referencedCollections": {
                    "items": [
                      "schema_Organization"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/bookFormat",
                  "name": "schema_bookFormat",
                  "shortenedUri": "schema:bookFormat",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 11,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://schema.org/isPartOf",
                  "name": "_inverse_schema_isPartOf",
                  "shortenedUri": "schema:isPartOf",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 19,
                  "referencedCollections": {
                    "items": [
                      "schema_Article"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          },
          {
            "uri": "http://xmlns.com/foaf/0.1/Person",
            "collectionId": "foaf_Person",
            "shortenedUri": "foaf:Person",
            "title": null,
            "total": 50995,
            "properties": {
              "items": [
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                  "name": "rdf_typeList",
                  "shortenedUri": "rdf:type",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/spouse",
                  "name": "schema_spouseList",
                  "shortenedUri": "schema:spouse",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathPlace",
                  "name": "schema_deathPlace",
                  "shortenedUri": "schema:deathPlace",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 31,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__predecessorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#predecessorOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "https://w3id.org/pnv#hasName",
                  "name": "https___w3id_org_pnv_hasName",
                  "shortenedUri": "pnv:hasName",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "https___w3id_org_pnv_PersonName"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nameVariants",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nameVariants",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nameVariants",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 15,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/deathDate",
                  "name": "schema_deathDate",
                  "shortenedUri": "schema:deathDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 43,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue",
                      "rdf_Alt",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#motto",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__mottoList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#motto",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModelList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/parent",
                  "name": "schema_parentList",
                  "shortenedUri": "schema:parent",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 27,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtPaintingsFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtPaintingsFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/workLocation",
                  "name": "schema_workLocationList",
                  "shortenedUri": "schema:workLocation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 51,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "_inverse_owl_differentFromList",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/name",
                  "name": "schema_name",
                  "shortenedUri": "schema:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/name",
                  "name": "foaf_name",
                  "shortenedUri": "foaf:name",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/primaryTopic",
                  "name": "_inverse_foaf_primaryTopic",
                  "shortenedUri": "foaf:primaryTopic",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__willWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#willWitnessedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/children",
                  "name": "_inverse_schema_childrenList",
                  "shortenedUri": "schema:children",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 27,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__standSuretyForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#standSuretyFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__isAssuredByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#isAssuredBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__heirOf",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#heirOf",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyClientOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyClientOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employeeOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employeeOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticEmployerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticEmployerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/hasOccupation",
                  "name": "schema_hasOccupationList",
                  "shortenedUri": "schema:hasOccupation",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 57,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthPlace",
                  "name": "schema_birthPlace",
                  "shortenedUri": "schema:birthPlace",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 51,
                  "referencedCollections": {
                    "items": [
                      "schema_Place"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__commissionedWorksOfArtByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#commissionedWorksOfArtBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__receivedContributionInAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#receivedContributionInAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                  "name": "rdfs_label",
                  "shortenedUri": "rdfs:label",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pseudonym",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pseudonymList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pseudonym",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sharedHouseWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sharedHouseWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bequestsTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bequestsTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__legalGuardianOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#legalGuardianOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessRelationWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessRelationWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriage",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/sameAs",
                  "name": "schema_sameAsList",
                  "shortenedUri": "schema:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 17,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__courtlyPatronOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#courtlyPatronOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__domesticServantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#domesticServantOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessConflictWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessConflictWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__executorFor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#executorFor",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__employerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#employerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysOrInheritsStockFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysOrInheritsStockFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#penName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__penNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#penName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutorList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/birthDate",
                  "name": "schema_birthDate",
                  "shortenedUri": "schema:birthDate",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 46,
                  "referencedCollections": {
                    "items": [
                      "schema_StructuredValue",
                      "rdf_Alt",
                      "http___semanticweb_cs_vu_nl_2009_11_sem__Time"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#differentFrom",
                  "name": "owl_differentFromList",
                  "shortenedUri": "owl:differentFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nominatesAsExecutor",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nominatesAsExecutor",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__baptismWitnessedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#baptismWitnessedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/spouse",
                  "name": "_inverse_schema_spouseList",
                  "shortenedUri": "schema:spouse",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/parent",
                  "name": "_inverse_schema_parentList",
                  "shortenedUri": "schema:parent",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 32,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__borrowedTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#borrowedTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldPaintingsToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldPaintingsTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsOrLeavesStockToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsOrLeavesStockTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__pupilOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#pupilOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 5,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__posedAsModelForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#posedAsModelFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://xmlns.com/foaf/0.1/gender",
                  "name": "foaf_gender",
                  "shortenedUri": "foaf:gender",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/gender",
                  "name": "schema_gender",
                  "shortenedUri": "schema:gender",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": true,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2004/02/skos/core#hiddenLabel",
                  "name": "skos_hiddenLabelList",
                  "shortenedUri": "skos:hiddenLabel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__principalOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#principalOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedBaptismOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedBaptismOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__contributedToAlbumAmicorumFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#contributedToAlbumAmicorumFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.w3.org/2002/07/owl#sameAs",
                  "name": "owl_sameAsList",
                  "shortenedUri": "owl:sameAs",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 17,
                  "referencedCollections": {
                    "items": [
                      "tim_unknown"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nickName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__nickNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#nickName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsPrintingPressToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsPrintingPressTo",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayedBy",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysTypographicalMaterialFrom",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysTypographicalMaterialFrom",
                  "isInverse": false,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 3,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lodgerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lodgerOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__witnessedWillOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#witnessedWillOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__masterOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#masterOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 5,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__usedAsModelList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#usedAsModel",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__buysPrintingPressFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#buysPrintingPressFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religiousName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__religiousNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religiousName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__agentForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#agentFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__divorcedFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#divorcedFrom",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/mainEntity",
                  "name": "_inverse_schema_mainEntity",
                  "shortenedUri": "schema:mainEntity",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 100,
                  "referencedCollections": {
                    "items": [
                      "schema_DataFeedItem",
                      "schema_CreativeWork"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__businessPartnerOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#businessPartnerOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religion",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__religionList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#religion",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 9,
                  "referencedCollections": {
                    "items": []
                  }
                },
                {
                  "uri": "http://purl.org/vocab/bio/0.1/partner",
                  "name": "_inverse_http___purl_org_vocab_bio_0_1_partnerList",
                  "shortenedUri": "bio:partner",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 64,
                  "referencedCollections": {
                    "items": [
                      "http___purl_org_vocab_bio_0_1_Marriage"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__collaboratedWithList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#collaboratedWith",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__tennantOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#tennantOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__soldHouseToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#soldHouseTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__sellsTypographicalMaterialTo",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#sellsTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": false,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://schema.org/children",
                  "name": "schema_childrenList",
                  "shortenedUri": "schema:children",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 32,
                  "referencedCollections": {
                    "items": [
                      "schema_Person",
                      "tim_unknown",
                      "foaf_Person"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__portrayedList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#portrayed",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__lentTypographicalMaterialToList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#lentTypographicalMaterialTo",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__funeralAttendedByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#funeralAttendedBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__workedUnderCommissionForList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#workedUnderCommissionFor",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__residentialLandlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#residentialLandlordOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__attendedFuneralOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#attendedFuneralOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__boughtHouseFromList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#boughtHouseFrom",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__wardOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#wardOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__travellingCompanionOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#travellingCompanionOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__assistedAtMarriageByList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#assistedAtMarriageBy",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "name": "_inverse_http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__landlordOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#landlordOf",
                  "isInverse": true,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__successorOfList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#successorOf",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": false,
                  "density": 1,
                  "referencedCollections": {
                    "items": [
                      "schema_Role"
                    ]
                  }
                },
                {
                  "uri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bentName",
                  "name": "http___www_vondel_humanities_uva_nl_ecartico_lod_vocab__bentNameList",
                  "shortenedUri": "http://www.vondel.humanities.uva.nl/ecartico/lod/vocab/#bentName",
                  "isInverse": false,
                  "isList": true,
                  "isValueType": true,
                  "density": 1,
                  "referencedCollections": {
                    "items": []
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}