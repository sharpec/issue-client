//
// SWITCH AZIENDA TEXOL
//
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCR") {
		frm.set_value("company", "Texol Srl");
		frm.refresh_field("company");
		}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCF") {
		frm.set_value("company", "Texol Srl");
		frm.refresh_field("company");
		}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCS") {
		frm.set_value("company", "Texol Srl");
		frm.refresh_field("company");
		}
});
//
// SWITCH AZIENDA ORMA
//
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,4)== "NCRO") {
		frm.set_value("company", "Orma Srl");
		frm.refresh_field("company");
		}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,4)== "NCFO") {
		frm.set_value("company", "Orma Srl");
		frm.refresh_field("company");
		}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,4)== "NCSO") {
		frm.set_value("company", "Orma Srl");
		frm.refresh_field("company");
		}
});
//
// NOTIFICHE LOG GENERICHE
//
frappe.ui.form.on("Issue", {
  descrizione_analisi: function(frm) {
    // this function is called when the value of descrizione_analisi is changed.
    frm.timeline.insert_comment("Comment", frm.doc.descrizione_analisi);
frm.timeline.insert_comment("Submitted", "ha modificato la descrizione dell'analisi delle cause");
  }
});

frappe.ui.form.on("Issue", {
  accettazione_analisi: function(frm) {
    // this function is called when the value of accettazione_analisi is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato l'accettazione dell'analisi delle cause");
  }
});

frappe.ui.form.on("Issue", {
  descrizione_proposta_azione_correttiva: function(frm) {
    // this function is called when the value of descrizione_proposta_azione_correttiva is changed.
    frm.timeline.insert_comment("Comment", frm.doc.descrizione_proposta_azione_correttiva);
frm.timeline.insert_comment("Submitted", "ha modificato la proposta analisi correttiva");
  }
});

frappe.ui.form.on("Issue", {
  accettazione_proposta: function(frm) {
    // this function is called when the value of accettazione_proposta is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato l'accettazione della proposta correttiva");
  }
});

frappe.ui.form.on("Issue", {
  descrizione_trattamento_nc: function(frm) {
    // this function is called when the value of descrizione_trattamento_nc is changed.
    frm.timeline.insert_comment("Comment", frm.doc.descrizione_trattamento_nc);
frm.timeline.insert_comment("Submitted", "ha modificato la proposta di trattamento NC");
  }
});

frappe.ui.form.on("Issue", {
  approvazione_da_amministrazione: function(frm) {
    // this function is called when the value of approvazione_da_amministrazione is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato l'accettazione del trattamento");
  }
});

frappe.ui.form.on("Issue", {
  approvazione_da_commerciale: function(frm) {
    // this function is called when the value of approvazione_da_commerciale is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato l'accettazione del trattamento");
  }
});

frappe.ui.form.on("Issue", {
  importo_nota_credito: function(frm) {
    // this function is called when the value of conferma_del_customer_service_della_nota_credito is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato importo nota credito");
  }
});

frappe.ui.form.on("Issue", {
  numero_nota_credito: function(frm) {
    // this function is called when the value of conferma_del_customer_service_della_nota_credito is changed.
    frm.timeline.insert_comment("Submitted", "ha generato numero nota credito");
  }
});

frappe.ui.form.on("Issue", {
  richiesta_ndc: function(frm) {
    // this function is called when the value of richiesta_ndc is changed.
    frm.timeline.insert_comment("Submitted", "ha richiesto nota credito");
  }
});

frappe.ui.form.on("Issue", {
  conferma_del_customer_service_della_nota_credito: function(frm) {
    // this function is called when the value of conferma_del_customer_service_della_nota_credito is changed.
    frm.timeline.insert_comment("Submitted", "ha modificato la conferma nota credito");
  }
});
//
// FLAG AUTOMATICI TEXOL
//
frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "Trattamento NC") {
			frm.set_value("accettazione_proposta", 1);
			frm.set_value("accettazione_analisi", 1);
			frm.refresh_field("accettazione_proposta");
			frm.refresh_field("accettazione_analisi");
			}
		}
});

frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "Verifica Importi") {
			frm.set_value("richiesta_ndc", 1);
			frm.refresh_field("richiesta_ndc");
			}
		}
});

frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "Approvazione NDC Renzo") {
			frm.set_value("approvazione_da_commerciale", 1);
			frm.refresh_field("approvazione_da_commerciale");
			}
		}
});

frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "Emissione NDC") {
			frm.set_value("approvazione_da_amministrazione", 1);
			frm.refresh_field("approvazione_da_amministrazione");
			}
		}
});

frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "NC Chiusa") {
			frm.set_value("conferma_del_customer_service_della_nota_credito", 1);
			frm.refresh_field("conferma_del_customer_service_della_nota_credito");
			}
		}
});
frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.causa == "Errore Operatore") {
			frm.set_value("retraining_richiesto", 1);
			frm.refresh_field("retraining_richiesto");
			}
		}
});

//
// CAMPI OBBLIGATORI TEXOL
//
//frappe.ui.form.on("Issue", "before_save", function(frm) {
//    frm.toggle_reqd("azione_di_contenimento", frm.doc.naming_series.substr(0,3)== "NCF");
//});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
			frm.toggle_reqd("capoturno", frm.doc.workflow_nc== "Analisi RPROD");
			frm.toggle_reqd("operatore", frm.doc.workflow_nc== "Analisi RPROD");
			frm.toggle_reqd("causa", frm.doc.workflow_nc== "Analisi RPROD");
			frm.toggle_reqd("data_produzione", frm.doc.workflow_nc== "Analisi RPROD");
			frm.toggle_reqd("descrizione_analisi", frm.doc.workflow_nc== "Analisi RPROD");
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
	frm.toggle_reqd("fattura", frm.doc.workflow_nc== "Verifica Importi");
	frm.toggle_reqd("ddt", frm.doc.workflow_nc== "Verifica Importi");
	frm.toggle_reqd("importo_nota_credito", frm.doc.workflow_nc== "Verifica Importi");
			}
		}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
	frm.toggle_reqd("numero_nota_credito", frm.doc.workflow_nc== "Emissione NDC");
			}
		}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
	frm.toggle_reqd("data_invio_a_cliente", frm.doc.workflow_nc== "NDC Generata");
			}
		}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
	frm.toggle_reqd("data_invio_a_cliente", frm.doc.workflow_nc== "Comunicazione al Cliente");
			}
		}
});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("data_rilevazione", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("responsabile_apertura_nc", frm.doc.workflow_nc== "NC Aperta");
				//frm.toggle_reqd("codice_prodotto_fornitore", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("lotto", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("quantitativi_fornitore", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("numero_colli", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("identificativo_univoco_del_collo", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("materiale_riutilizzabile", frm.doc.workflow_nc== "NC Aperta");
				frm.toggle_reqd("azione_di_contenimento", frm.doc.workflow_nc== "NC Aperta");
			}
		}
	});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCF") {
		if (frm.doc.azione_di_contenimento== "Altro") {
			frm.toggle_reqd("descrizione_azione_di_contenimento", frm.doc.workflow_nc== "NC Aperta");
		}
	}
});

frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("proposta_di_trattamento", frm.doc.workflow_nc== "Analisi NCF");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("usato_su_ordine_di_produzione", frm.doc.workflow_nc== "Da Rilavorare");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("ddt_in_uscita_materiale_reso", frm.doc.workflow_nc== "Da Rendere");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Texol Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("data_rimozione_da_area_nc", frm.doc.workflow_nc== "Da Smaltire");
			}
		}
	}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCF") {
		if (frm.doc.proposta_di_trattamento== "Altro") {
			frm.toggle_reqd("descrizione_proposta_di_trattamento", frm.doc.workflow_nc== "Analisi NCF");
		}
	}
});
//frappe.ui.form.on("Issue", "after_save", function(frm) {
//	if (frm.doc.naming_series.substr(0,3)== "NCF") {
//			frm.toggle_reqd("fornitore", frm.doc.workflow_nc== "NC Aperta");
//	}
//});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("fornitore", frm.doc.workflow_nc== "NC Aperta");
				}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.naming_series.substr(0,3)== "NCR") {
				frm.toggle_reqd("customer", frm.doc.workflow_nc== "NC Aperta");
				}
		}
	});
//
// BLOCCO CAMPI SOLA LETTURA
//
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.subject.length > "0") {
				frm.set_df_property("subject", "read_only", frm.doc.__islocal ? 0 : 1);
			}
			if (frm.doc.naming_series.substr(0,3)== "NCR") {
				if (frm.doc.customer.length > "0") {
					frm.set_df_property("customer", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				if (frm.doc.fornitore.length > "0") {
					frm.set_df_property("fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
			if (frm.doc.naming_series.substr(0,3)== "NCR") {
				if (frm.doc.codice_prodotto.length > "0") {
					frm.set_df_property("codice_prodotto", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.rif_doc.length > "0") {
					frm.set_df_property("rif_doc", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.rif_nc_cliente.length > "0") {
					frm.set_df_property("rif_nc_cliente", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (in_list(["Approvazione Analisi", "Approvazione Analisi RPROD", "Approvazione Analisi CS", "Approvazione Analisi Magazzino", "Approvazione Analisi PKG", "Approvazione Analisi QA", "Trattamento NC", "Richiesta Verifica Importi", "Approvazione NDC Fabrizio", "Approvazione NDC Renzo", "Verifica Importi", "Emissione NDC", "Comunicazione al Cliente", "NC Chiusa"], frm.doc.workflow_nc)) {
				if (frm.doc.capoturno.length > "0") {
					frm.set_df_property("capoturno", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.operatore.length > "0") {
					frm.set_df_property("operatore", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.causa.length > "0") {
					frm.set_df_property("causa", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.data_produzione.length > "0") {
					frm.set_df_property("data_produzione", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.descrizione_analisi.length > "0") {
					frm.set_df_property("descrizione_analisi", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (in_list(["Emissione NDC", "NDC Generata", "Approvazione NDC Fabrizio", "Approvazione NDC Renzo", "Comunicazione al Cliente", "NC Chiusa"], frm.doc.workflow_nc)) {
				if (frm.doc.fattura.length > "0") {
					frm.set_df_property("fattura", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.ddt.length > "0") {
					frm.set_df_property("ddt", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				//if (frm.doc.importo_nota_credito.length > "0") {
					frm.set_df_property("importo_nota_credito", "read_only", frm.doc.__islocal ? 0 : 1);
				//}
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (in_list(["NDC Generata", "Comunicazione al Cliente", "NC Chiusa"], frm.doc.workflow_nc)) {
				if (frm.doc.numero_nota_credito.length > "0") {
					frm.set_df_property("numero_nota_credito", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.naming_series.substr(0,3)== "NCR") {
				if (in_list(["NC Chiusa"], frm.doc.workflow_nc)) {
					if (frm.doc.data_invio_a_cliente.length > "0") {
						frm.set_df_property("data_invio_a_cliente", "read_only", frm.doc.__islocal ? 0 : 1);
					}
					if (frm.doc.conferma_del_customer_service_della_nota_credito.length > "0") {
						frm.set_df_property("conferma_del_customer_service_della_nota_credito", "read_only", frm.doc.__islocal ? 0 : 1);
					}
				}
			}
		}
	});

frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (in_list(["Analisi NCF", "NCF Chiusa", "Da Rilavorare"], frm.doc.workflow_nc)) {
				frm.set_df_property("data_rilevazione", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("responsabile_apertura_nc", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("codice_prodotto_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("lotto", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("quantitativi_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("numero_colli", "read_only", frm.doc.__islocal ? 0 : 1);
				//frm.set_df_property("identificativo_univoco_del_collo", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("materiale_riutilizzabile", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("azione_di_contenimento", "read_only", frm.doc.__islocal ? 0 : 1);
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				if (in_list(["NCF Chiusa"], frm.doc.workflow_nc)) {
					frm.set_df_property("proposta_di_trattamento", "read_only", frm.doc.__islocal ? 0 : 1);
					frm.set_df_property("descrizione_proposta_di_trattamento", "read_only", frm.doc.__islocal ? 0 : 1);
					frm.set_df_property("nota_credito_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
					frm.set_df_property("importo_nota_credito_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});

	
/// ORMA

//
// FLAG AUTOMATICI ORMA
//
frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "O Trattamento NC") {
			frm.set_value("accettazione_proposta", 1);
			frm.set_value("accettazione_analisi", 1);
			frm.refresh_field("accettazione_proposta");
			frm.refresh_field("accettazione_analisi");
			}
		}
});

frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "O Verifica Importi") {
			frm.set_value("richiesta_ndc", 1);
			frm.refresh_field("richiesta_ndc");
			}
		}
});
frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "O NDC DIR AMMINISTRATIVO") {
			frm.set_value("approvazione_da_commerciale", 1);
			frm.refresh_field("approvazione_da_commerciale");
			}
		}
});
frappe.ui.form.on("Issue", {
	validate: function(frm) {
		if(frm.doc.workflow_nc == "O Emissione NDC") {
			frm.set_value("approvazione_da_amministrazione", 1);
			frm.refresh_field("approvazione_da_amministrazione");
			}
		}
});

//
// CAMPI OBBLIGATORI ORMA
//

frappe.ui.form.on("Issue", {
	onload: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			frm.toggle_reqd("capoturno", frm.doc.workflow_nc== "O Analisi RPROD");
			frm.toggle_reqd("operatore", frm.doc.workflow_nc== "O Analisi RPROD");
			frm.toggle_reqd("causa", frm.doc.workflow_nc== "O Analisi RPROD");
			frm.toggle_reqd("data_produzione", frm.doc.workflow_nc== "O Analisi RPROD");
			frm.toggle_reqd("descrizione_analisi", frm.doc.workflow_nc== "O Analisi RPROD");
		}
	}
});
frappe.ui.form.on("Issue", {
	onload: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			frm.toggle_reqd("fattura", frm.doc.workflow_nc== "O Verifica Importi");
			frm.toggle_reqd("ddt", frm.doc.workflow_nc== "O Verifica Importi");
			frm.toggle_reqd("importo_nota_credito", frm.doc.workflow_nc== "O Verifica Importi");
		}
	}
});
frappe.ui.form.on("Issue", {
	onload: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			frm.toggle_reqd("numero_nota_credito", frm.doc.workflow_nc== "O Emissione NDC");
		}
	}
});
frappe.ui.form.on("Issue", {
	onload: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			frm.toggle_reqd("data_invio_a_cliente", frm.doc.workflow_nc== "O NDC Generata");
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			frm.toggle_reqd("data_invio_a_cliente", frm.doc.workflow_nc== "O Comunicazione al Cliente");
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("proposta_di_trattamento", frm.doc.workflow_nc== "O Analisi NCF");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("usato_su_ordine_di_produzione", frm.doc.workflow_nc== "O Da Rilavorare");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("ddt_in_uscita_materiale_reso", frm.doc.workflow_nc== "O Da Rendere");
			}
		}
	}
});
frappe.ui.form.on("Issue", {
	refresh: function(frm) {
		if (frm.doc.company== "Orma Srl") {
			if (frm.doc.naming_series.substr(0,3)== "NCF") {
				frm.toggle_reqd("data_rimozione_da_area_nc", frm.doc.workflow_nc== "O Da Smaltire");
			}
		}
	}
});
frappe.ui.form.on("Issue", "before_save", function(frm) {
	if (frm.doc.naming_series.substr(0,3)== "NCF") {
		if (frm.doc.proposta_di_trattamento== "Altro") {
			frm.toggle_reqd("descrizione_proposta_di_trattamento", frm.doc.workflow_nc== "O Analisi NCF");
		}
	}
});
//
// BLOCCO CAMPI SOLA LETTURA ORMA
//
frappe.ui.form.on("Issue", {
		onload: function(frm) {
			if (in_list(["O Approvazione Analisi", "O Approvazione Analisi RPROD", "O Approvazione Analisi CS", "O Approvazione Analisi Magazzino", "O Approvazione Analisi PKG", "O Approvazione Analisi QA", "O Trattamento NC", "O Richiesta Verifica Importi", "O NDC DIR COMMERCIALE", "O NDC DIR AMMINISTRATIVO", "O Verifica Importi", "O Emissione NDC", "O Comunicazione al Cliente"], frm.doc.workflow_nc)) {
				if (frm.doc.capoturno.length > "0") {
					frm.set_df_property("capoturno", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.operatore.length > "0") {
					frm.set_df_property("operatore", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.causa.length > "0") {
					frm.set_df_property("causa", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.descrizione_analisi.length > "0") {
					frm.set_df_property("descrizione_analisi", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.data_produzione.length > "0") {
					frm.set_df_property("data_produzione", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.descrizione_analisi.length > "0") {
					frm.set_df_property("descrizione_analisi", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});
frappe.ui.form.on("Issue", {
		onload: function(frm) {
			if (in_list(["O Emissione NDC", "O NDC Generata", "O NDC DIR COMMERCIALE", "O NDC DIR AMMINISTRATIVO", "O Comunicazione al Cliente"], frm.doc.workflow_nc)) {
				if (frm.doc.fattura.length > "0") {
					frm.set_df_property("fattura", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				if (frm.doc.ddt.length > "0") {
					frm.set_df_property("ddt", "read_only", frm.doc.__islocal ? 0 : 1);
				}
				//if (frm.doc.importo_nota_credito.length > "0") {
					frm.set_df_property("importo_nota_credito", "read_only", frm.doc.__islocal ? 0 : 1);
				//}
			}
		}
	});
frappe.ui.form.on("Issue", {
		onload: function(frm) {
			if (in_list(["O NDC Generata", "O Comunicazione al Cliente"], frm.doc.workflow_nc)) {
				if (frm.doc.numero_nota_credito.length > "0") {
					frm.set_df_property("numero_nota_credito", "read_only", frm.doc.__islocal ? 0 : 1);
				}
			}
		}
	});
frappe.ui.form.on("Issue", {
		refresh: function(frm) {
			if (in_list(["O Analisi NCF", "O Da Rilavorare"], frm.doc.workflow_nc)) {
				frm.set_df_property("data_rilevazione", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("responsabile_apertura_nc", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("codice_prodotto_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("lotto", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("quantitativi_fornitore", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("numero_colli", "read_only", frm.doc.__islocal ? 0 : 1);
				//frm.set_df_property("identificativo_univoco_del_collo", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("materiale_riutilizzabile", "read_only", frm.doc.__islocal ? 0 : 1);
				frm.set_df_property("azione_di_contenimento", "read_only", frm.doc.__islocal ? 0 : 1);
			}
		}
	});
