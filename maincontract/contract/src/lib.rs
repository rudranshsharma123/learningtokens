use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
// use near_sdk::env::panic_str;
use near_sdk::log;
use near_sdk::require;
use near_sdk::serde::Serialize;
use near_sdk::AccountId;
// use near_sdk::Balance;
use near_sdk::Promise;
use near_sdk::{env, near_bindgen};
use std::collections::HashMap;
// use std::hash::BuildHasher;

// Define the default message
// const DEFAULT_MESSAGE: &str = "Hello";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct EntryContract {
    organization: Vec<Orgs>,
}

// Define the default, which automatically initializes the contract

#[derive(Serialize, BorshDeserialize, BorshSerialize)]
pub struct Orgs {
    id: AccountId,
    name: String,
    requested_amount: u128,
    current_balance: u128,
}
#[near_bindgen]
impl EntryContract {
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE

    pub fn get_orgs(&self) -> &Vec<Orgs> {
        &self.organization
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    #[payable]
    pub fn register(&mut self, id: AccountId, name: String, requested_amount: u128) {
        self.pay_fees();
        // let org =
        require!(
            !self.organization.iter().any(|i| i.id == id),
            "Sorry Your orgs already exists"
        );

        let new_org = Orgs {
            id: id.clone(),
            name,
            requested_amount,
            current_balance: 0,
        };

        self.organization.push(new_org);
        log!("Registration successful {}", id);
    }

    fn pay_fees(&mut self) -> Promise {
        let attached_money = env::attached_deposit();
        let amount = attached_money / 10;
        let owner = env::predecessor_account_id();

        Promise::new(owner).transfer(amount)
    }

    pub fn change_balance(&mut self, id: AccountId, new_balance: u128) {
        require!(
            self.organization.iter().any(|i| i.id == id),
            "Sorry Your orgs already exists"
        );
        let mut org = self.organization.iter_mut().find(|i| i.id == id).unwrap();
        require!(org.id != id, "Sorry Your orgs already exists");
        // let org = self.organization.get_mut(&id).unwrap();
        org.current_balance = new_balance;
    }
}
impl Default for EntryContract {
    fn default() -> Self {
        let map: Vec<Orgs> = Vec::new();

        Self { organization: map }
    }
}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
*/
