---
title: "Lift-and-Shift vs Re-Architecting: A Practical Guide to Azure Migration"
description: "Not every workload should move to the cloud the same way. Here is how to choose the right migration strategy."
author: "Jay"
date: "July 27 2026"
tags: ["Migration","Azure","Cloud","Architecture","Strategy"]
category: "Tech + Strategy"
image: "/images/azure-migration-guide.jpg"
featured: false
---

Migrating to Azure is not a single decision, it is a set of decisions made workload by workload. Treating every application the same way during migration, whether by moving everything as-is or trying to modernize everything at once, is one of the most common causes of migrations that run over budget and over schedule.

## The Migration Strategies, in Practical Terms

Cloud migrations generally fall into a few recognizable strategies, often referred to as the "R's" of migration:

* **Rehost (lift-and-shift):** move an application to the cloud largely unchanged, typically onto virtual machines
* **Replatform:** make targeted changes, such as moving a database to a managed PaaS service, without a full application rewrite
* **Refactor or re-architect:** redesign the application to take full advantage of cloud-native and PaaS capabilities
* **Retire:** decommission applications that no longer provide enough value to justify migrating
* **Retain:** keep certain systems on-premises for now, due to constraints that make migration impractical in the near term

## When Lift-and-Shift Makes Sense

Lift-and-shift is often criticized as "doing the cloud wrong," but it is the right choice in specific situations:

* Tight timelines, such as a data center contract expiring
* Legacy applications with limited remaining lifespan that do not justify modernization investment
* A need to prove cloud viability quickly before committing to a larger transformation effort

The tradeoff is that lift-and-shift rarely captures the full cost and operational benefits of cloud-native PaaS services, since the application still runs largely the way it did on-premises.

## When Replatforming Is the Better Middle Ground

Replatforming captures meaningful benefits without the cost and risk of a full rewrite. A common example is moving a self-managed database to Azure SQL Database or Azure Database for PostgreSQL, gaining automated backups, patching, and scaling without changing the application's core logic.

Replatforming tends to be the right choice when:

* The application logic is sound, but the underlying infrastructure creates ongoing operational burden
* There is a clear, low-risk PaaS equivalent for a self-managed component
* The team wants meaningful cloud benefits without pausing feature development for a lengthy rewrite

## When Full Re-Architecture Is Worth the Investment

Re-architecting is the most expensive and time-consuming path, but it is the right choice when an application's growth, scalability, or reliability requirements have outgrown its original design. This path makes the most sense for core, long-lived systems where the investment will pay off over years, not for applications nearing the end of their useful life.

## A Practical Migration Process

Regardless of strategy, a disciplined migration process reduces risk significantly:

1. **Assess** the current environment, dependencies, and workload characteristics before deciding on a strategy
2. **Pilot** the migration with a low-risk, representative workload to validate assumptions
3. **Migrate in phases**, prioritizing workloads by business risk and technical complexity
4. **Validate** performance, cost, and reliability after each phase before moving to the next
5. **Optimize** after migration, since the first successful move is rarely the most cost-efficient final state

## Common Pitfalls to Avoid

* Choosing one migration strategy for every workload instead of evaluating each one individually
* Underestimating the effort required for testing and validation, not just the technical move itself
* Migrating without a clear cost model, leading to unpleasant surprises after go-live
* Treating migration as a one-time project instead of the start of an ongoing optimization process

The right migration strategy depends on the workload, not a company-wide mandate. Matching each application to the approach that fits its constraints and long-term value is what separates migrations that deliver real business benefit from ones that simply move the same problems to a new environment.

## Sources

- [Plan your migration - Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/)
