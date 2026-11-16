/* ===== EDIT THIS FILE ONLY. Anything written "[ADD ...]" is a placeholder shown in a dashed box.
   Set showPlaceholders:false when finished to hide any leftover empty link chips. ===== */
window.SITE = {
showPlaceholders: true,
name: "Mansura Naznine",
title: "AI & Computer Vision Researcher",
tagline: "Biomedical AI | Multimodal Learning | Computer Vision",
intro: "My research background is in artificial intelligence, machine learning, computer vision, and multimodal data analysis. I have worked on deep learning-based problems involving biomedical imaging, hyperspectral data, nuclear medicine scans, and other complex visual datasets. Through these projects, I developed experience in model development, data analysis, multimodal learning, and evaluating AI systems in real-world settings. I am interested in extending this background toward reliable, human-centered, and multimodal AI systems that can address challenging problems across healthcare and other application domains.",
links: {
  cv: "assets/Mansura_Naznine_CV.pdf",
  scholar: "https://scholar.google.com/citations?hl=en&user=zbqt1qUAAAAJ",
  github: "https://github.com/naznine",
  linkedin: "https://www.linkedin.com/in/mansura-naznine/",
  researchgate: "",
  email: "naznine31@gmail.com",
},
about: [
 "I am a researcher with a B.Sc. in Computer Science & Engineering from Rajshahi University of Engineering & Technology (RUET), Bangladesh. I began in image processing and data compression as an undergraduate, then moved into disease detection and classification from medical and agricultural images.",
 "I am currently a Research Assistant at the QuICK Lab, North South University, Bangladesh. Before this I was a Research Assistant in the Machine Learning Group at Qatar University and a Lecturer in Computer Science and Engineering at Lalon University of Science and Arts.",
 "My work has shown me that a model’s accuracy on one dataset is not enough. In clinical imaging, readers disagree, patients differ, and hospitals differ. I want to build AI that is evaluated and explained with these differences in mind, and that can learn from several kinds of data at once."
],
interests: [
 {t:"Artificial Intelligence", d:"Machine learning and deep learning for image-based prediction, with attention to lightweight models that can be deployed."},
 {t:"Computer Vision", d:"Image classification and object detection, applied to leaf disease, waste, urine sediment, and medical images."},
 {t:"Biomedical AI", d:"Hyperspectral imaging, DMSA scintigraphy, and urology imaging, including comparison of AI output with clinical readers."},
 {t:"Multimodal Learning", d:"Combining spectral and spatial information with cross-modal attention, and combining heterogeneous biomedical data."},
 {t:"Human-Centered AI", d:"Extending my multimodal background toward interactive systems that combine visual, physiological, behavioral, sensor, and language information."},
 {t:"Reliable & Explainable AI", d:"Patient-level evaluation, external validation, Grad-CAM, EigenCAM, SHAP, and the study of observer variability."}
],
projects: [
 {
  title:"Hyperspectral Glioblastoma Classification",
  tags:["Hyperspectral imaging","Swin Transformer","Cross-modal attention"],
  figure:"Model architecture diagram, spectral–spatial pipeline, or classification maps from the paper",
  problem:"Classifying tumor versus non-tumor tissue in hyperspectral images of glioblastoma.",
  contribution:"First author. Worked on a classification framework that integrates spectral and spatial information, evaluated with patient-level train/test splitting.",
  methods:["Spectral–spatial integration","Cross-modal attention","Swin Transformer","Patient-level train/test splitting"],
  challenge:"Hyperspectral data are high-dimensional, and evaluation must separate patients. In a related review I co-authored, intra-patient validation was found to inflate reported performance.",
  pub:"Engineering Applications of Artificial Intelligence, 2026",
  links:{paper:"https://doi.org/10.1016/j.engappai.2026.114883", code:""}
 },
 {
  title:"Renal Scarring Detection from DMSA Scans",
  tags:["Pediatric nuclear medicine","Observer variability","Clinical AI"],
  figure:"Annotation consensus masks (Fig. 3 of the paper), agreement heatmaps, or model predictions",
  problem:"Detecting renal cortical scarring in children from DMSA scintigraphy, where interpretation varies between readers.",
  contribution:"First author of the observer-agreement study (220 pediatric patients, four experienced radiologists, two reading sessions). My work included dataset preparation, deep learning model development, evaluation, and comparison of AI predictions with clinical interpretation. The model study is under review.",
  methods:["Cohen’s kappa and Kendall’s tau-b agreement analysis","Manual scar annotation masks with consensus visualization","Deep learning model development and evaluation"],
  challenge:"Readers were consistent with themselves but disagreed with each other, especially on scar severity and location. Reliable AI needs well-annotated data and evaluation that accounts for this.",
  pub:"Pediatric Radiology, 2025 (observer study); BMC Medical Imaging (under review)",
  links:{paper:"https://doi.org/10.1007/s00247-025-06379-z", code:"[ADD CODE LINK]"}
 },
 {
  title:"Hydronephrosis Classification",
  tags:["Biomedical imaging","Disease classification","Clinical AI"],
  figure:"Example images, model workflow, or classification results from the paper",
  problem:"Classifying hydronephrosis from medical images using deep learning.",
  contribution:"Co-author (second author). Worked on model development and evaluation. [ADD 1–2 SENTENCES ON YOUR SPECIFIC ROLE]",
  methods:["Hybrid neural networks"],
  challenge:"Reliable disease classification for clinical use. [ADD SPECIFIC CHALLENGE FROM THE PAPER]",
  pub:"Urology, 2025",
  links:{paper:"https://doi.org/10.1016/j.urology.2025.08.005", code:"[ADD CODE LINK]"}
 },
 {
  title:"Urine Sediment Detection with an Ensemble Detector",
  tags:["Object detection","Ensembling","External validation","EigenCAM"],
  figure:"Detection examples, ensemble workflow (Fig. 2 or 6), or EigenCAM maps (Fig. 10) from the paper",
  problem:"Automatically detecting and classifying seven types of particles in microscopy images of urine sediment, which is slow and varies between operators when done by hand.",
  contribution:"First author. Combined YOLOv9e and KD-YOLOX-ViT with Weighted Box Fusion, tested the model on a second, independent clinical microscopy dataset, and added EigenCAM visualizations.",
  methods:["YOLOv9e","KD-YOLOX-ViT (knowledge distillation with a Vision Transformer)","Weighted Box Fusion","EigenCAM","Fine-tuning for external validation"],
  challenge:"Class imbalance and differing class definitions between datasets. Performance dropped on the external dataset before fine-tuning, which the paper reports openly.",
  pub:"IEEE Access, 2025",
  links:{paper:"https://doi.org/10.1109/ACCESS.2025.3577959", code:"[ADD CODE LINK]"}
 },
 {
  title:"Automated Waste Classification",
  tags:["Lightweight deep learning","SHAP","Real-world AI"],
  figure:"Framework diagram, sample waste images, or SHAP explanations from the paper",
  problem:"Classifying waste images automatically to support recycling.",
  contribution:"First author of the PLDs-CNN-Ridge-ELM paper. Worked on model development and evaluation of a lightweight, explainable framework. Also a co-author on two related waste-classification papers.",
  methods:["Parallel lightweight CNN stages","Ridge extreme learning machine","SHAP explanations"],
  challenge:"Keeping the model small enough to be practical while still explaining its decisions.",
  pub:"Engineering Applications of Artificial Intelligence, 2025",
  links:{paper:"https://doi.org/10.1016/j.engappai.2025.112522", code:"[ADD CODE LINK]"}
 },
 {
  title:"Mulberry Leaf Disease Detection",
  tags:["CNN","Dataset preparation","Android deployment","Grad-CAM"],
  figure:"Leaf image samples, Grad-CAM overlays (Fig. 9), or Android app screens (Fig. 7) from the paper",
  problem:"Identifying leaf spot and leaf rust on mulberry leaves, the food of silkworms, where manual inspection across large farms is slow.",
  contribution:"Co-author (second author). Worked on CNN-based classification of mulberry leaves. The dataset was collected in Rajshahi, Bangladesh, and labeled by a sericulture specialist.",
  methods:["Transfer learning with a modified MobileNetV3Small","Data augmentation","Grad-CAM","TensorFlow Lite Android app"],
  challenge:"A small, imbalanced image set (1,091 images in three classes) and a model small enough to run on a phone.",
  pub:"IEEE Access, 2024",
  links:{paper:"https://doi.org/10.1109/ACCESS.2024.3407153", code:"[ADD CODE LINK]"}
 },
 {
  title:"Multimodal Biomedical Learning",
  tags:["Multimodal learning","Attention","Reliable AI"],
  figure:"Fusion architecture diagram or attention visualization",
  problem:"Biomedical datasets contain different kinds of information that need to be combined in one model.",
  contribution:"Cross-modal attention between spectral and spatial information in the glioblastoma work. [ADD OTHER MULTIMODAL DATASETS OR PROJECTS YOU WORKED ON]",
  methods:["Attention mechanisms","Cross-modal representation learning"],
  challenge:"Learning from complex, heterogeneous data in a way that holds across patients and sites.",
  pub:"",
  links:{paper:"", code:"[ADD CODE LINK]"}
 }
],
publications: [
 {group:"Peer-reviewed journals"},
 {a:"M. Naznine, M. E. H. Chowdhury, S. H. M. Ali, M. F. Ibrahim, M. B. I. Reaz, A. B. M. Meeran, R. Sankaran", t:"Spectral–spatial integration of hyperspectral imaging for glioblastoma classification with cross-modal attention and Swin transformer", v:"Engineering Applications of Artificial Intelligence", y:2026, doi:"10.1016/j.engappai.2026.114883"},
 {a:"A. B. M. Meeran, M. E. H. Chowdhury, M. Naznine, S. H. M. Ali, R. Sankaran, S. Pedersen", t:"AI-Driven Hyperspectral Imaging in Clinical Medicine: A Critical Appraisal of Translational Readiness (review)", v:"Diagnostics, 16, 3338", y:2026, doi:"10.3390/diagnostics16203338"},
 {a:"M. Naznine, M. Nahiduzzaman, M. J. Karim, M. F. Ahamed, A. Salam, M. A. Ayari, A. Khandakar, A. Ashraf, M. Ahsan, J. Haider", t:"PLDs-CNN-Ridge-ELM: A parallel lightweight two-stage waste classification model guided by SHAP", v:"Engineering Applications of Artificial Intelligence", y:2025, doi:"10.1016/j.engappai.2025.112522"},
 {a:"M. Naznine, A. Salam, M. M. Khan, S. F. Nobi, M. E. H. Chowdhury", t:"An Ensemble Deep Learning Approach for Accurate Urinary Sediment Detection Using YOLOv9e and KD-YOLOX-ViT", v:"IEEE Access, 13, 101934–101954", y:2025, doi:"10.1109/ACCESS.2025.3577959"},
 {a:"M. Naznine, M. E. H. Chowdhury, A. Salam, A. Shabani, K. Kumaresan, N. Komarova, A. Arya, T. Hosokawa, K. Z. Al-Nabhani, T. O. Abbas", t:"How consistent is the interpretation of renal scarring in pediatric patients using technetium-99m dimercaptosuccinic acid scintigraphy", v:"Pediatric Radiology, 55, 2632–2642", y:2025, doi:"10.1007/s00247-025-06379-z"},
 {a:"A. Salam, M. Naznine, M. E. H. Chowdhury et al.", t:"Hybrid Neural Networks for Precise Hydronephrosis Classification Using Deep Learning", v:"Urology", y:2025, doi:"10.1016/j.urology.2025.08.005"},
 {a:"M. Nahiduzzaman, M. F. Ahamed, M. Naznine, M. J. Karim, H. B. Kibria, M. A. Ayari, A. Khandakar, A. Ashraf, J. Haider", t:"An Automated Waste Classification System Using Deep Learning Techniques: Toward Efficient Waste Recycling and Environmental Sustainability", v:"Knowledge-Based Systems", y:2025, doi:"10.1016/j.knosys.2025.113028"},
 {a:"A. Salam, T. O. Abbas, M. Naznine, M. E. H. Chowdhury", t:"Can deep learning-based segmentation and classification improve the detection of renal cortical abnormalities?", v:"Neural Computing and Applications", y:2026, doi:"10.1007/s00521-026-12031-0"},
 {a:"S. Mahmud, M. S. B. Islam, M. Naznine, M. S. I. Sumon, S. M. Zughaier, Y. Zhao, M. E. H. Chowdhury", t:"Machine learning-enabled label-free SERS for microbial sensing: Toward robust, generalizable, and deployable workflows", v:"Talanta, 311", y:2027, doi:"10.1016/j.talanta.2026.130241"},
 {a:"A. Salam, M. Naznine, N. Jahan, E. Nahid, M. Nahiduzzaman, M. E. H. Chowdhury", t:"Mulberry Leaf Disease Detection Using CNN-Based Smart Android Application", v:"IEEE Access", y:2024, doi:"10.1109/ACCESS.2024.3407153"},
 {a:"F. R. Sayem, M. S. B. Islam, M. Naznine, M. Nashbat, M. H. Zia, A. K. A. Kunju, A. Khandakar, A. Ashraf, M. E. Majid, S. B. A. Kashem, M. E. H. Chowdhury", t:"Enhancing waste sorting and recycling efficiency: robust deep learning-based approach for classification and detection", v:"Neural Computing and Applications", y:2024, doi:"10.1007/s00521-024-10855-2"},
 {a:"A. T. Chowdhury, A. Salam, M. Naznine, D. Abdalla, L. Erdman, M. E. H. Chowdhury, T. O. Abbas", t:"Artificial Intelligence Tools in Pediatric Urology: A Comprehensive Review of Recent Advances", v:"Diagnostics, 14(18), 2059", y:2024, doi:"10.3390/diagnostics14182059"},
 {group:"Under review"},
 {a:"M. Naznine, M. E. H. Chowdhury, A. Salam, T. O. Abbas, K. Kumaresan, N. Komarova, A. Arya, T. Hosokawa, K. Z. Al-Nabhani", t:"AI-Assisted Detection of Renal Scarring in Pediatric DMSA Scans: A Comparative Study of Deep Learning and Radiologist Interpretation with Clinical Risk Associations", v:"BMC Medical Imaging (under review)", y:"", doi:""},
 {a:"A. Salam, M. Naznine, M. E. H. Chowdhury, M. S. Islam, J. I. Rahat, S. M. Muyeen", t:"Integrating Image Segmentation and Regression Models for Enhanced Lettuce Trait Prediction", v:"Soft Computing (under review)", y:"", doi:""},
 {group:"Conference proceedings"},
 {a:"M. Z. Islam, T. A. Redoy, M. Naznine, M. Khatun, R. Toufiq, M. S. Marzouq, M. J. B. Khaleque", t:"Time Complexity Reduction of CU Splitting in HEVC Intra Coding Using Zerocross Edge Detection Method", v:"26th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, pp. 1–6", y:2023, doi:"10.1109/ICCIT60459.2023.10441214"}
],
experience: [
 {role:"Research Assistant", org:"QuICK Lab, North South University, Bangladesh", when:"November 2026 – present", pts:["[ADD 1–2 LINES ON THE LAB’S FOCUS AND YOUR WORK]"]},
 {role:"Research Assistant, Machine Learning Group", org:"Qatar University, Doha, Qatar (hybrid)", when:"March 2024 – [CONFIRM END DATE]", pts:["Applied AI and machine learning to healthcare and agriculture research.","Developed solutions for disease prediction, medical image analysis, and agricultural applications.","Contributed to IRCC grant-funded projects and supported grant proposal preparation."]},
 {role:"Lecturer, Computer Science and Engineering", org:"Lalon University of Science and Arts, Kushtia, Bangladesh", when:"August 2024 – April 2025", pts:["[ADD COURSES TAUGHT]"]},
 {role:"Undergraduate Research", org:"Rajshahi University of Engineering & Technology (RUET)", when:"May 2021 – February 2024", pts:["AI-driven research on waste classification, gastrointestinal disease detection, and mulberry leaf disease prediction from image datasets.","Methods to reduce time complexity in video compression.","Machine learning for predicting phosphoglycerylation sites (bioinformatics)."]}
],
skills: [
 {g:"Research methods", items:["Deep Learning","Machine Learning","Computer Vision","CNNs","Transformers","Swin Transformer","Attention mechanisms","Multimodal learning","Medical image analysis","Data preprocessing","Model evaluation","Explainable AI"]},
 {g:"Programming and tools", items:["Python","C/C++","Java","MATLAB","MySQL","Git and GitHub","LaTeX"]}
],
education: [
 {deg:"B.Sc. in Computer Science & Engineering", org:"Rajshahi University of Engineering & Technology (RUET), Bangladesh", when:"January 2018 – September 2023", note:"CGPA: 3.48 / 4.00. Relevant courses: Artificial Intelligence, Digital Image Processing, Data Mining, Neural Networks and Fuzzy Systems, Software Engineering, Network Security."}
],
vision: [
 "I want to develop reliable AI systems that learn from complex multimodal data and work well in real-world and healthcare settings.",
 "I plan to build on my multimodal learning work toward human-centered AI: systems that combine visual, physiological, behavioral, sensor, and language information, and that generalize across users, institutions, datasets, and environments. I am also interested in foundation models and in explainable, trustworthy AI."
]
};
